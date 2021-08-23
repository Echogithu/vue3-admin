<template lang="pug">
a-dropdown
  span.avatar-container
    a-avatar(src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png")
    span admin
  template(#overlay)
    a-menu
      a-menu-item
        a 退出登录
  </template>

<style lang="scss" scoped>
.avatar-container {
  padding: 0 8px;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
}
</style>
