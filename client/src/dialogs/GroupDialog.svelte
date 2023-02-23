<script lang="ts">

    import { postGroup, updateGroup } from "../api/groups.api";
    import type { Group } from "../store/groups.store";

    export let show: {
        show: boolean,
        group: Group | undefined
    }

    export let close: () => void

    let name: string = show.group ? show.group.name : ''
    let direction: string = show.group ? show.group.direction : ''

    async function create() {

        if (show.group) {
           await updateGroup(show.group.id, name, direction)
           close()
        }
        await postGroup(name, direction)
        close()
    }
</script>

<div class={"fixed top-0 left-0 w-screen h-screen bg-black/50 justify-center items-center " + (show.show ? "flex" : "hidden")}> 
    <div class="w-[400px] p-5 bg-white rounded-md shadow-md flex flex-col gap-2">

        <h3 class="text-2xl"> {show.group ? "Edit group" : "Add group"} </h3>

        <input class="p-2 border border-slate-300" type="text" placeholder="Name" bind:value={name}>

        <select class="p-2 border border-slate-300" bind:value={direction}>
            <option disabled selected> Direction </option>
            <option value="SMM"> SMM </option>
            <option value="Mobilography"> Mobilography </option>
            <option value="Office"> Office </option>
            <option value="Buxgalteria"> Buxgalteria </option>
            <option value="Videomontaj"> Videomontaj </option>
            <option value="Sound Design"> Sound Design </option>
            <option value="Architecture"> Architecture </option>
            <option value="Robototechnics"> Robototechnics </option>
            <option value="Graphic Design"> Graphic Design </option>
            <option value="Frontend"> Frontend </option>
            <option value="Nodejs Backend"> Nodejs Backend </option>
            <option value="Python Backend"> Python Backend </option>
            <option value="Foundation"> Foundation </option>
        </select>
        <div class="p-3 flex justify-between">
            <button on:click={() => close() } class="bg-red-500 text-white py-1 px-3 rounded"> Close </button>
            <button on:click={ () => create() } class="bg-green-500 text-white py-1 px-3 rounded"> {show.group ? "Update" : "Add"} </button>
        </div>
    </div>
</div>