<template>
  <div >
     <form @submit.prevent="addSkill">
        <input type="text" placeholder="Enter a skill you have.." v-model="skill" v-validate="'min:2'" name="skill">
        <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>    
      </form>
    <div class="skills">
      <ul>
      <li v-for="(data, index) in skills" :key='index'>{{data.skill}}
        <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
      </li>
      </ul>
      <p>These are the skills you possess.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: ['skills'],
  data() {
    return {
      skill: '',
      skillList: this.skills
    };
  },
  methods : {
      addSkill() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.skills.push({skill: this.skill});
            this.skill = '';
          } else {
            this.skill="";
          }
        })
      },
      remove(id) {
        this.skills.splice(id, 1);
      }      
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 
  .skills {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }


  input {
    width: calc(100% - 0px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

   .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

</style>
