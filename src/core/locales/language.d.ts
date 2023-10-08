import { Locale } from 'antd/es/locale'

// language support
type SupportLanguage = 'en-US' | 'zh-CN'

type SingleLanguageSetting = {
  locale: SupportLanguage,
  messages: any,
  antd: Locale,
  momentLocale: string,
}

interface MessageDescriptor {
  id?: string;
  description?: string | any;
  defaultMessage?: string;
}


export {
  SingleLanguageSetting,
  SupportLanguage,
  MessageDescriptor
}