import svgLoader from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

export default {
	plugins: [
		// vue(),
		svgLoader(),
		ElementPlus()
		// AutoImport({
		// 	imports: [
		// 		'vue',
		// 		'vue-router',
		// 		'pinia',
		// 		{
		// 			'@/helper/pinia-auto-refs': ['useStore'],
		// 		},
		// 	],
		// 	dts: 'typings/auto-import.d.ts',
		// 	// eslintrc: {
		// 	// 	enabled: true, // Default `false`
		// 	// 	filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
		// 	// 	globalsPropValue: 'readonly', // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
		// 	// },
		// 	// 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
		// 	resolvers: [
		// 		// // 自动导入图标组件
		// 		// IconsResolver({
		// 		// 	enabledCollections: ['ep', 'page'],
		// 		// }),
		// 		ElementPlusResolver(),
		// 	],
		// }),
		// Components({
		// 	resolvers: [
		// 		// 自动注册图标组件
		// 		// IconsResolver({
		// 		// 	prefix: 'icon',
		// 		// 	// element-plus图标库，其他图标库 https://icon-sets.iconify.design
		// 		// 	enabledCollections: ['ep', 'page'],
		// 		// 	// 自定义icon集合
		// 		// 	customCollections: ['page'],
		// 		// 	// 当图标集名字过长时，可使用集合别名
		// 		// 	// alias: {
		// 		// 	// 	system: 'system-uicons',
		// 		// 	// },
		// 		// }),

		// 		// 自动导入 Element Plus 组件
		// 		// { importStyle: 'sass' }
		// 		ElementPlusResolver(),
		// 	],
		// 	include: [
		// 		/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
		// 		/\.vue$/,
		// 		/\.vue\?vue/, // .vue
		// 		/\.md$/, // .md
		// 	],

		// 	// 指定组件位置，默认是src/components
		// 	dirs: ['src/components'],
		// 	// 配置文件生成位置
		// 	dts: 'typings/components.d.ts',
		// }),
	],
}
