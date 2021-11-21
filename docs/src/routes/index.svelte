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

<h2>Hello!</h2>
<TextBlock style="margin-top: 10px;margin-bottom:10px;"
	>This is a work in progress site and you shouldn't visit this yet unless you are told to!</TextBlock
>
<br />
<TextBlock style="margin-bottom:10px;"
	>I'm named after that operating system that some people complain about.<br />If you would like to
	check out who am I, let's continue reading together:</TextBlock
>
<br />
<Expander style="margin-top:10px;">
	My things
	<svelte:fragment slot="content">
		<Button
			variant="hyperlink"
			on:click={() => (window.location.href = 'https://github.com/itsWindows11')}>GitHub</Button
		>
		<Button
			variant="hyperlink"
			on:click={() => (window.location.href = 'https://reddit.com/u/itsWindows11')}>Reddit</Button
		>
		<br />
		<TextBlock style="margin-top:3px;">Discord: SimpleBear#2721</TextBlock><br /><TextBlock
			>(spoiler: i dont know why is my discord name different)</TextBlock
		><br /><br /><TextBlock>Pronouns: he/him</TextBlock>
	</svelte:fragment>
</Expander>

<Expander style="margin-top:10px;">
	Development
	<svelte:fragment slot="content">
		<TextBlock>I like TypeScript and C# the most, but here's a list of what I may use:</TextBlock>
		<ul style="margin-left: 30px;margin-top:10px">
			<li>TypeScript</li>
			<li>C#</li>
			<li>C</li>
			<li>C++</li>
			<li>Java</li>
			<li>HTML, CSS and JavaScript</li>
			<li>YAML</li>
			<li><s>electrons</s></li>
		</ul>
	</svelte:fragment>
</Expander>

<Expander style="margin-top:10px;">
	Title
	<svelte:fragment slot="content">
		Test Expander<br />
		<Button style="margin-top:10px;">And a button!</Button>

		<Button on:click={() => (dialogOpen = true)} style="margin-top:10px"
			>Open to see something</Button
		>
		<ContentDialog bind:open={dialogOpen} title="Content Dialog">
			<div style="display: flex; flex-direction: column; gap: 3px; margin: 0;">
				<TextBlock>Wow</TextBlock>
				<Checkbox>Test</Checkbox>
			</div>
			<svelte:fragment slot="footer">
				<Button
					variant="accent"
					on:click={() => {
						dialogOpen = false;
						dialogResult = 'Do the thing!';
					}}>Do the thing!</Button
				>
				<Button
					on:click={() => {
						dialogOpen = false;
						dialogResult = 'Cancel';
					}}>Cancel</Button
				>
			</svelte:fragment>
		</ContentDialog>
	</svelte:fragment>
</Expander>
