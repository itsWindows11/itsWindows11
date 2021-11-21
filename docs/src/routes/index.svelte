<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { Button, Expander, ContentDialog, TextBlock, ComboBox, Checkbox, TextBox } from 'fluent-svelte';
	import 'fluent-svelte/theme.css';

	let dialogOpen = false;
	let dialogResult = "";
</script>

<h2>Hello!</h2>
<TextBlock style="margin-top: 10px;margin-bottom:10px;">This is a work in progress site and you shouldn't visit this yet unless you are told to!</TextBlock>
<br>
<Button on:click={() => window.history.back()}>Go back to your place</Button>

<Expander style="margin-top:10px;">
	Title
	<svelte:fragment slot="content">
		Test Expander<br>
		<Button style="margin-top:10px;">And a button!</Button>

		<Button on:click={() => (dialogOpen = true)} style="margin-top:10px">Open to see something</Button>
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
					dialogResult = "Do the thing!";
				}}>Do the thing!</Button
			>
			<Button
				on:click={() => {
					dialogOpen = false;
					dialogResult = "Cancel";
				}}>Cancel</Button
			>
		</svelte:fragment>
	</ContentDialog>
	</svelte:fragment>
</Expander>