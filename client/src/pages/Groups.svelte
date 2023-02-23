<script lang="ts">
	import Group from "../components/Group.svelte";
	import DashboardAside from '../components/DashboardAside.svelte'
	import GroupDialog from '../dialogs/GroupDialog.svelte'
	 
	import { getGroups } from '../api/groups.api'
	import { groupsStore } from '../store/groups.store'
	

	let addDialog = {
		show: false,
		group: undefined
	}


	getGroups()

</script>

<section  class="grid grid-cols-4 bg-slate-200">
	<DashboardAside></DashboardAside>
	<div class="col-span-3">
		<div class="p-5 flex flex-col gap-3">
			<div class="flex justify-between">
                <p class="text-xl font-semibold">Groups</p>
			    <button on:click={() => addDialog = { show: true, group: undefined }} class="py-1 px-3 rounded bg-blue-500 text-white">Add group</button>
            </div>
			<div class="grid grid-cols-3 gap-3">
				{#each $groupsStore as group}
					<Group group={group} update={(group) => addDialog = { show: true, group}}></Group>
				{/each}
			</div>
		</div>
	</div>
</section>
{#if addDialog.show}
	<GroupDialog show={addDialog} close={() => addDialog = { show: false, group: undefined }}></GroupDialog>
{/if}