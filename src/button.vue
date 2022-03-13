<template>
  <button class="s-button" :class="{[`icon-${iconPosition}`]:true}">
    <svg class="icon" aria-hidden="true" >
      <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
  props:['icon','iconPosition']
  }
</script>

<style lang="scss">
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
}
</style>