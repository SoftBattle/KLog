import { BaseResponse } from '../interface'
import { upload } from '../libs/reaquest'

interface Image {
  url: string, 
  title?: string, 
  alt?: string
}

export function uploadFile(data: FormData) {
  return upload<BaseResponse>('/file/upload', data)
}

async function uploadImage(file: File): Promise<string> {
  try {
    let formdata = new FormData()
    formdata.append('files', file)
    console.log(formdata.getAll('files'))
    let re = await uploadFile(formdata)
    if(re.stat === 'ok') {
      return re.data;
    } else {
      return ''
    }
  } catch(e) {
    return ''
  }
}

export async function uploadImages(files: File[]): Promise<Image[]> {
  // 参数为文件列表，返回一个promise, 包含url，ttile，alt

  let res: Image[] = []

  for(let i = 0; i < files.length; i++) {
    let file = files[i]
    let url = await uploadImage(file)
    let title = file.name
    let alt = file.name
    res.push({url, title, alt})
  }

  return res
}