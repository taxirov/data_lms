<script lang="ts">
    import type { Group } from "../store/groups.store";
    import { deleteGroup, updateGroup } from "../api/groups.api";

    export let group: Group
    export let update: (group: Group) => void

    function onDelete() {
        deleteGroup(group.id)
    }
    function onUpdate() {
        update(group)
    }

</script>

<div class="p-5 bg-white rounded-lg shadow">
    <p class="text-lg font-bold">{group.name}</p>
    <p>{group.direction}</p>
    <div class="flex justify-end gap-2">
        <button class="px-3 py-1 rounded bg-red-500 text-white" on:click={() => { onDelete() }}>Delete</button>
        <button class="px-3 py-1 rounded bg-sky-500 text-white" on:click={() => { onUpdate() }}>Update</button>
        <a class="px-3 py-1 rounded bg-yellow-500 text-white" href="/dashboard/groups/{group.id}">Details</a>
    </div>
</div>