import axios from "axios";
	
	export type Group = {
		id: string;
		name: string;
		direction: string;
	}

	let groups: Group[] = [];	
	let group_name: HTMLInputElement;
	let group_direction: HTMLInputElement;
	let i: number = 1

	export async function getAllGroups() {
		axios.get("http://localhost:7060/groups").then(async (res) => {
			groups = await res.data.groups;
		});
	}
	export async function postGroup(name: string, direction: string) {
		const group = {
			name,
			direction,
		};
		axios.post("http://localhost:7060/groups", group).then(async (res) => {
			alert(await res.data.message);
			getAllGroups();
		});
	}
	export async function deleteGroup(id: string) {
		axios.delete("http://localhost:7060/groups/" + id).then(async (res) => {
			alert(await res.data.message);
			getAllGroups();
		});
	}

	getAllGroups();