/*
 * @Author: xiaoshanwen
 * @Date: 2023-11-10 09:26:20
 * @LastEditTime: 2023-11-20 14:58:11
 * @FilePath: /vitePluginAutoI18nDemo/example/react/src/utils/lang.js
 */
import '../../lang/index'
import langJSON from '../../lang/index.json'
const langMap = {
    en: window?.lang?.en || _getJSONKey('en', langJSON),
    zhcn: window?.lang?.zhcn || _getJSONKey('zhcn', langJSON)
}
const lang = window.localStorage.getItem('lang') || 'zhcn'
window.$t.locale(langMap[lang], 'lang')