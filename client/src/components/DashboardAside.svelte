<script lang="ts">
    import { link } from 'svelte-navigator'

</script>

<div class="aside col-span-1 sticky top-0 left-0 flex flex-col justify-between gap-2 p-5 h-screen bg-blue-900 text-white">
    <div>
        <p class="text-2xl font-semibold mb-5">Dashboard</p>
        <div class="flex flex-col gap-3">
            <a class="bg-indigo-500 py-1 px-3 rounded-lg text-lg" href="/dashboard" use:link>Dashboard</a>
            <a class="bg-indigo-500 py-1 px-3 rounded-lg text-lg" href="/dashboard/groups" use:link>Groups</a>
            <a class="bg-indigo-500 py-1 px-3 rounded-lg text-lg" href="/dashboard/students" use:link>Students</a>
            <a class="bg-indigo-500 py-1 px-3 rounded-lg text-lg" href="/dashboard/teachers" use:link>Teachers</a>
        </div>
    </div>
    <div class="inline-flex flex-col gap-3">
        <a
            href="se"
            class="text-white text-lg bg-indigo-500 rounded-lg px-4 py-1"
            ><i class="bi bi-gear-fill" /> Settings</a
        >
        <button class="text-lg bg-red-500 rounded-lg px-4 py-1"
            ><i class="bi bi-box-arrow-in-left" /> Chiqish</button
        >
    </div>
</div>