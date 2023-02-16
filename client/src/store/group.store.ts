import { writable } from "svelte/store";
import type { Group } from "../api/groups.api";

export const groupStore = writable<Group[]>([])