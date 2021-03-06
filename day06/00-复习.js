/**
 * 正则:
 * 是什么? 就是一套判断是否符合条件的规则(操作字符串)
 * 作用? 匹配, 替换, 提取
 * 操作? 字面量  /字符/参数
 * 替换的方法: 字符串.replace(正则, 要替换的字符)
 * 提取的方法: 字符串.match(正则)
 * 匹配的方法: 正则.test(字符串)
 *
 * 特殊字符?
 * 数字: \d
 * 非数字: \D
 * 数字,字母,下划线:\w
 * 非数字,非字母,非下划线: \W
 * 空白符: \s  空格,\r,\n
 * 非空白符: \S
 * 除换行符以外的其他任意的单个字符 .
 * 以什么开头 ^
 * 以什么结尾 $
 *
 * 限制符: 注意: 如果不写^$,那么写限制符就没有什么意义
 * * 0~n
 * + 1~n
 * ? 0~1
 * {n} 必须是n个
 * {n,} n到无限个
 * {n,m} n~m个
 *
 *
 * [] 中括号只占一个字符的位置,里面可以写多个字符.但是表示的是当前这个位置可选的字符只能从中括号中选择
 * [^] 中括号只占一个字符的位置,里面可以写多个字符.但是表示的是当前这个位置可选的字符不能从中括号中选择
 * | 或的意思 默认将正则两边分开. 但是如果被()包裹起来的,就是将小括号里面的内容分开
 * \ 转义符: 把特殊字符,转成普通字符, 把普通字符,转成特殊字符
 * [A-Za-z]  表示字母部分大小写
 *
 *
 *
 */

console.log(/^\d?$/.test('11'))
