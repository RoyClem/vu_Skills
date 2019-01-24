<template>
  <div>
    <Skills :skills="skills" />
  </div>
</template>

<script>
import Skills from './Skills.vue'

export default {
  name: 'app',
  data() { 
    return {
      skills: [
          { "skill": "Vue.js" }
      ],
    };
  },
  components: {
    Skills
  }
}
</script>
