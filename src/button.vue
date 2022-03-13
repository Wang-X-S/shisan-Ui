<template>
  <button class="s-button" :class="{[`icon-${iconPosition}`]:true}">
    <s-icon class="icon" v-if="icon" :name="icon"></s-icon>
    <s-icon class="loading" name="loading"></s-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
  // props:['icon','iconPosition'],
    props:{
      icon:{},
      iconPosition:{
        type:String,
        default:'left',
        validator(value){
          return value=='left'|| value =='right'
        }
      }
    }
  }
</script>

<style lang="scss">
@keyframes spin {
  0%{
    transform:rotate(0deg)
  }
  100%{
    transform:rotate(360deg)
  }
}

.s-button{
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 0.5em;
  border-radius: var(--border-radius);
  border:1px solid var(--border-color);
  background: var(--button-bg);

  display: inline-flex;
  vertical-align: top;
  justify-content: center;
  align-items: center;
  &:hover{border-color:var(--border-color-hover)}
  &:active{background-color: var(--button-active-bg);}
  &:focus{outline:none;}
  >.icon{
    order:1;
    margin-right: 0.3em;
  }
  >.content{
    order:2
  }
  &.icon-right{
    >.icon{
      order:2;
      margin-left: 0.3em;
      margin-right: 0;
    }
    >.content{
      order:1
    }
  }
  .loading{
    animation:spin 2s infinite linear;
  }
}
</style>