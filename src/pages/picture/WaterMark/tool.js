function compressImg(base64, quality, mimeType) {
  let canvas = document.createElement('canvas')
  let img = document.createElement('img')
  img.crossOrigin = 'anonymous'
  return new Promise((resolve, reject) => {
    img.src = base64
    img.onload = () => {
      let targetWidth, targetHeight
      if (img.width > MAX_WIDTH) {
        targetWidth = MAX_WIDTH
        targetHeight = (img.height * MAX_WIDTH) / img.width
      } else {
        targetWidth = img.width
        targetHeight = img.height
      }
      canvas.width = targetWidth
      canvas.height = targetHeight
      let ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, targetWidth, targetHeight) // 清除画布
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      let imageData = canvas.toDataURL(mimeType, quality / 100)
      resolve(imageData)
    }
  })
}

/**
 * 添加水印
 */
export async function addWaterMarker(file, el = '#markImg') {
  // 将文件blob转换成图片
  let img = await blobToImg(file)
  return new Promise(async (resolve, reject) => {
    try {
      // 创建canvas画布
      let canvas = document.createElement('canvas')
      //等比例调整canvas宽高，以缩小图片体积
      let imgRatio = img.naturalWidth / img.naturalHeight //图片比例
      canvas.width = 750 //默认设置成750
      canvas.height = canvas.width / imgRatio

      let ctx = canvas.getContext('2d')

      // 填充上传的图片
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      // 生成水印图片
      const markWidth = document.querySelector(el).clientWidth
      let zoom = canvas.width * 0.3 / markWidth
      let markEle = document.querySelector(el)
      // 先缩放水印html再转成图片
      markEle.style.transform = `scale(${zoom})`
      const markImg = await htmlToCanvas(markEle)

      // 填充水印
      ctx.drawImage(markImg, canvas.width - markImg.width - 15 * zoom, canvas.height - markImg.height - 15 * zoom, markImg.width, markImg.height)

      // 将canvas转换成blob
      canvas.toBlob(blob => resolve(blob))
    } catch (error) {
      reject(error)
    }

  })
}

/**
* blob转img标签
*/
function blobToImg(blob) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.addEventListener('load', () => {
      let img = new Image()
      img.src = reader.result
      img.addEventListener('load', () => resolve(img))
    })
    reader.readAsDataURL(blob)
  })
}

/**
* html转成canvas，需要安装html2canvas.js插件
*/
export function htmlToCanvas(el, backgroundColor = 'rgba(0,0,0,.1)') {
  return new Promise(async (resolve, reject) => {
    try {
      const markImg = await html2canvas(el, {
        allowTaint: false, //允许污染
        useCORS: true,
        backgroundColor //'transparent'  //背景色
      })
      resolve(markImg)
    } catch (error) {
      reject(error)
    }
  })
}
