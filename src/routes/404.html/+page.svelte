<script lang="ts">
	import { page } from '$app/stores';
	import TerminalView from '../../pages/TerminalView.svelte';
</script>

<TerminalView pathname={$page.url.pathname} />
