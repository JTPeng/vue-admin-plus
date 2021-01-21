<template>
  <el-container class="page-view">
    <el-aside v-if="isDev" width="200px" style="background-color: #393d49">
      <el-tree
        :data="routesList"
        default-expand-all
        :props="defaultProps"
        @node-click="handleNodeClick"
      ></el-tree>
    </el-aside>
    <el-container style="min-width: 1070px; height: 100%">
      <el-header v-if="isDev" style="text-align: right">
        <span>王小虎</span>
      </el-header>
      <el-main class="page-main">
        <router-view #="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import { routes } from '../router/index'
import { useRouter, RouteRecordRaw } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    const startIndex = ref(-1)
    const defaultProps = reactive({
      children: 'children',
      label: 'resourceName',
    })
    const isDev = ref(true)
    function handleNodeClick(data: RouteRecordRaw) {
      router.push(data.path)
    }
    function madeRoutes(
      routes: Array<RouteRecordRaw>,
      parentPath?: string
    ): any {
      return routes.map((item: any) => {
        const { path, children, meta = {} } = item
        const { title } = meta
        const currPath = path.startsWith('/') ? path : `${parentPath}/${path}`
        if (Array.isArray(children) && children.length > 0) {
          return {
            resourceName: title,
            path: currPath,
            children: madeRoutes(
              children.filter((c, i) => i > startIndex.value),
              path
            ),
          }
        }
        return {
          resourceName: title,
          path: currPath,
        }
      })
    }
    const routesList = computed(() => madeRoutes(routes))

    return {
      handleNodeClick,
      madeRoutes,
      defaultProps,
      isDev,
      routesList,
    }
  },
})
</script>