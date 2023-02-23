import axios from "axios";
import { groupsStore } from "../store/groups.store";
	
	export type Group = {
		id: string;
		name: string;
		direction: string;
	}

	export async function getGroups() {
		const response = await axios.get("http://localhost:7060/groups")
		groupsStore.set(response.data.groups)
	}
	export async function postGroup(name: string, direction: string) {
		const body = {
			name,
			direction
		}
	
		const response = await axios.post('http://localhost:7060/groups', body)
	
		groupsStore.update(oldState => {
			oldState.push(response.data.group)
			return oldState
		})
		getGroups()
	}
	export async function deleteGroup(id: string) {
		const response = await axios.delete("http://localhost:7060/groups/" + id)

		if (response.status == 200) {
			groupsStore.update(oldState => {
				return oldState.filter(group => group.id != id)
			})
		}
	}

	export async function updateGroup(id: string, name: string, direction: string) {
		const body: Group = {
			id,
			name,
			direction
		}
		const response = await axios.put("http://localhost:7060/groups/" + id, body)
		if (response.status == 200) {
			groupsStore.update(oldState => {
			   return oldState.map(group => group.id == id ? response.data.group : group );
		   })
		}
	}