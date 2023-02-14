<script lang="ts">
	import axios from "axios";

	interface Group {
		id: string,
		name: string,
		direction: string
	}

	let groups: Group[] = []
	let group_name: HTMLInputElement
	let group_direction: HTMLInputElement

	async function getAllGroups() {
		await axios
			.get('http://localhost:7060/groups')
			.then(res => {
				groups = res.data.groups
			})
	}
	async function postGroup(name: string, direction: string) {
		const group = {
			name,
			direction
		}
		await axios
			.post('http://localhost:7060/groups', group)
			.then(res => {
				alert(res.data.message)
				getAllGroups()
			})
	}
	
	getAllGroups()
</script>

<section class="h-screen flex">
	<div class="flex flex-col gap-2 p-5 h-screen border-r-4">
		<p class="text-xl font-semibold">Create group</p>
		<label for="group-name">Enter group name</label>
		<input bind:this={group_name} class="border-2 p-2 rounded outline-0" type="text" id="group-name" placeholder="Android">
		<label for="group-direction">Enter group direction</label>
		<input bind:this={group_direction} class="border-2 p-2 rounded outline-0" type="text" id="group-name" placeholder="Info group">
		<button on:click={() => {postGroup(group_name.value, group_direction.value)}}  class="bg-indigo-600 p-2 rounded text-white">Create group</button>
	</div>
	<div class="p-5 bg-[#e2e8f0] w-full">
		<p class="text-xl font-semibold">All groups</p>
		<div class="grid gap-3 grid-cols-4 py-5">
			{#each groups as group}
				<div class="flex flex-col justify-start gap-3 rounded-xl shadow p-4 bg-white">
					<p><b>Id: </b>{group.id}</p>
					<p><b>Group: </b>{group.name}</p>
					<p><b>Direction: </b>{group.direction}</p>
					<button class="text-white bg-red-600 p-2 rounded">O'chirish</button>
				</div>
			{/each}
		</div>
	</div>
</section>