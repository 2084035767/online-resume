// 动态导入大型依赖，实现按需加载
export const generatePDF = async (elementId: string = 'resume-content') => {
  try {
    // 动态导入 html2canvas 和 jspdf（仅在点击下载时加载）
    const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
      import('html2canvas'),
      import('jspdf'),
    ])

    const element = document.getElementById(elementId)
    if (!element) {
      throw new Error('Resume content not found')
    }

    // 临时添加 PDF 生成时的样式优化
    const originalOverflow = element.style.overflow
    element.style.overflow = 'visible'

    // 使用 html2canvas 截取内容
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    })

    // 恢复原始样式
    element.style.overflow = originalOverflow

    // 计算 PDF 尺寸（A4）
    const imgWidth = 210 // A4 宽度 mm
    const pageHeight = 297 // A4 高度 mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    // 创建 PDF
    const pdf = new jsPDF('p', 'mm', 'a4')

    // 如果内容超出一页，需要分页处理
    let heightLeft = imgHeight
    let position = 0

    // 将 canvas 转为图片数据
    const imgData = canvas.toDataURL('image/png')

    // 添加第一页
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
    heightLeft -= pageHeight

    // 如果内容超出一页，添加更多页
    while (heightLeft > 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
    }

    // 生成文件名
    const date = new Date().toISOString().split('T')[0]
    const filename = `resume_${date}.pdf`

    // 下载 PDF
    pdf.save(filename)

    return { success: true, filename }
  } catch (error) {
    console.error('PDF generation failed:', error)
    return { success: false, error }
  }
}