<script lang="ts">
	import { Router, Route } from "svelte-navigator";

    import App from './pages/App.svelte'
	import Groups from './pages/Groups.svelte'
    import Dashboard from "./pages/Dashboard.svelte"
	import Students from "./pages/Students.svelte"
	import Teachers from "./pages/Teachers.svelte"

</script>

<Router>
    <Route path='/' component={App}/>
	<Route path="/dashboard" component={Dashboard}/>
	<Route path="/dashboard/groups" component={Groups}/>
	<Route path="/dashboard/students" component={Students}/>
	<Route path="/dashboard/teachers" component={Teachers}/>		
</Router>

