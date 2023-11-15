<script>
	import { BoldText } from './plugin/bold';
	import RightText from './plugin/textRight';
	import TextLeft from './plugin/textLeft';
	import TextCenter from './plugin/textCenter';
	import TextJustify from './plugin/textJustify';
	import { ItalicText } from './plugin/italic';
	import { icons } from './common/icons';
</script>

<div class="mx-auto max-w-6xl mt-24">
	<section id="ujione-editor" class="border-2 border-slate-200 rounded-md overflow-hidden">
		<div id="editor-tollbar" class="h-24 border-b-2 border-slate-200 p-2 flex flex-col justify-between">
			<div>
				<button>Insert</button>
			</div>
			<div class="flex gap-4">
			<div>
				<button on:click={BoldText} title="Bold" class="h-6 w-6 p-1 cursor-pointer hover:bg-slate-200 rounded-md transition-colors duration-200" >{@html icons.bold}</button>
				<button on:click={ItalicText} title="Italic" class="h-6 w-6 p-1 cursor-pointer hover:bg-slate-200 rounded-md transition-colors duration-200 focus-visible:outline-none">{@html icons.italic}</button>
				<button title="Underline" class="h-6 w-6 p-1 cursor-pointer hover:bg-slate-200 rounded-md transition-colors duration-200 focus-visible:outline-none" >{@html icons.underline}</button>
			</div>
			<div>
				<button on:click={()=>{TextLeft()}} title="Text Left" class="h-6 w-6 p-1 cursor-pointer hover:bg-slate-200 rounded-md transition-colors duration-200">{@html icons.align_left}</button>
				<button on:click={()=>{TextCenter()}} title="Text Center" class="h-6 w-6 p-1 cursor-pointer hover:bg-slate-200 rounded-md transition-colors duration-200">{@html icons.align_center}</button>
				<button on:click={()=>{RightText()}} title="Text Right" class="h-6 w-6 p-1 cursor-pointer hover:bg-slate-200 rounded-md transition-colors duration-200">{@html icons.align_right}</button>
				<button on:click={()=>{TextJustify()}} title="Text Justify" class="h-6 w-6 p-1 cursor-pointer hover:bg-slate-200 rounded-md transition-colors duration-200">{@html icons.align_justify}</button>
			</div>
		</div>
		</div>
		<div contenteditable="true" id="editor-edit-ujione" class="w-full p-2 focus:outline-none min-h-[240px]">
			<p id="testing">asdkansd</p>
		</div>
		<div id="editor-info" class="border-t-2 border-slate-200 px-2 py-1 text-xs">0 : Kata</div>
	</section>
</div>
