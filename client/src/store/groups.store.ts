import { Writable, writable } from "svelte/store"

export type Group = {
    id: string
    name: string
    direction: string
}

export const groupsStore: Writable<Group[]> = writable([])