<script lang="ts">
    import type { Group } from "../store/groups.store"

    export let group: Group

</script>


<div class="p-5 bg-white rounded-lg shadow">
    <p class="text-lg font-bold">Name: {group.name} </p>
    <p>Direction: {group.direction} </p>
</div>