<script lang="ts">
    import type { Group } from "../api/groups.api";
    import { deleteGroup } from "../api/groups.api";

    let group: Group

</script>
<div class="flex flex-col justify-start gap-3 rounded-xl shadow p-4 bg-white">
    <p><b>Id: </b>{group.id}</p>
    <p><b>Group: </b>{group.name}</p>
    <p><b>Direction: </b>{group.direction}</p>
    <!-- svelte-ignore missing-declaration -->
    <button on:click={async () => {await deleteGroup(group.id)}} class="text-white bg-red-600 p-2 rounded">O'chirish</button>
</div>