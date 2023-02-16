<script lang="ts">
	import axios from "axios";
    import type { Group } from "../api/groups.api";
	import Groups from "../components/Group.svelte";



	let groups: Group[] = []
	let group_name: HTMLInputElement
	let group_direction: HTMLInputElement

	async function getAllGroups() {
		axios
			.get('http://localhost:7060/groups')
			.then(async res => {
				groups = await res.data.groups
			})
	}
	async function postGroup(name: string, direction: string) {
		const group = {
			name,
			direction
		}
		axios
			.post('http://localhost:7060/groups', group)
			.then(async res => {
				alert(await res.data.message)
				getAllGroups()
			})
	}
	async function deleteGroup(id: string) {
		axios
			.delete('http://localhost:7060/groups/' + id)
			.then(async res => {
				alert(await res.data.message)
				getAllGroups()
			})
	}
	
	getAllGroups()
</script>

<section class="h-screen flex">
    <div>
        <label for="group-name">Enter group name</label>
		<input
			bind:this={group_name}
			class="border-2 p-2 rounded outline-0"
			type="text"
			id="group-name"
			placeholder="Android"
		/>
		<label for="group-direction">Enter group direction</label>
		<input
			bind:this={group_direction}
			class="border-2 p-2 rounded outline-0"
			type="text"
			id="group-name"
			placeholder="Info group"
		/>
		<button
			on:click={async () => {
				await postGroup(group_name.value, group_direction.value);
			}}
			class="bg-indigo-600 p-2 rounded text-white">Create group</button
		>
    </div>
	<div class="flex flex-col gap-2 p-5 h-screen border-r-4">
		<p class="text-xl font-semibold">Create group</p>
		<label for="group-name">Enter group name</label>
		<input bind:this={group_name} class="border-2 p-2 rounded outline-0" type="text" id="group-name" placeholder="Android">
		<label for="group-direction">Enter group direction</label>
		<input bind:this={group_direction} class="border-2 p-2 rounded outline-0" type="text" id="group-name" placeholder="Info group">
		<button on:click={async () => {await postGroup(group_name.value, group_direction.value)}}  class="bg-indigo-600 p-2 rounded text-white">Create group</button>
	</div>
	<div class="p-5 bg-[#e2e8f0] w-full">
		<p class="text-xl font-semibold">All groups</p>
		<div class="grid gap-3 grid-cols-4 py-5">
			{#each groups as group}
				<Groups group={group}></Groups>
			{/each}
		</div>
	</div>
</section>