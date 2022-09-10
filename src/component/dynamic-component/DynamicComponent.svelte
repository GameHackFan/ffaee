<script>
  import EditorManager from "../manager/EditorManager.svelte";
  import ZoomManager from "../zoom/ZoomManager.svelte";
  import ModificationManager from "../modification/ModificationManager.svelte";
  import PatchManager from "../patch/PatchManager.svelte";
  import HealthEditor from "../health/HealthEditor.svelte";
  import SeedRandomizer from "../randomizer/SeedRandomizer.svelte";
  import LevelEditor from "../level/LevelEditor.svelte";

  export let componentProps;
  const componentMap =
  {
    "manager": EditorManager,
    "zoom": ZoomManager,
    "modification": ModificationManager,
    "patch": PatchManager,
    "health": HealthEditor,
    "randomizer": SeedRandomizer,
    "level": LevelEditor,
  }
  const component = componentMap[componentProps.key];
</script>


{#if component}
  <svelte:component this={component} props={componentProps} />
{/if}
