<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import {
		Button,
		Expander,
		ContentDialog,
		TextBlock,
		ComboBox,
		Checkbox,
		TextBox
	} from 'fluent-svelte';
	import 'fluent-svelte/theme.css';

	let dialogOpen = false;
	let dialogResult = '';
</script>

<h2>My wallpapers</h2>
<TextBlock style="margin-bottom:10px;margin-top:5px;"
	>I have made a (almost?) complete collection of my wallpapers, and you can see them below:</TextBlock
>
<br />

<img alt="Wallpaper" style="max-width: 100%;" src="/assets/wallpapers/wall1.png" />
<img alt="Wallpaper" style="max-width: 100%;" src="/assets/wallpapers/wall3.png" />
<img alt="Wallpaper" style="max-width: 100%;" src="/assets/wallpapers/wall5.png" />
<img alt="Wallpaper" style="max-width: 100%;" src="/assets/wallpapers/wall6.png" />
<img alt="Wallpaper" style="max-width: 100%;" src="/assets/wallpapers/wall7.png" />
<img alt="Wallpaper" style="max-width: 100%;" src="/assets/wallpapers/wall11.png" />
<img alt="Wallpaper" style="max-width: 100%;" src="/assets/wallpapers/wall13.png" />
<img alt="Wallpaper" style="max-width: 100%;" src="/assets/wallpapers/wall15.png" />