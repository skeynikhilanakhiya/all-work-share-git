<template>
<Header />
<Section />
<Sectionpart />
<mains />
<shop />
<blog />
<servi />
<foot />
</template>

<script>
import Header from './components/Header.vue'
import Section from './components/Section.vue'
import Sectionpart from './components/Section part.vue'
import mains from './components/main.vue'
import shop from './components/Shophome.vue'
import blog from './components/Blog.vue'
import servi from './components/Services.vue'
import foot  from './components/Footer.vue'

export default {
    name: 'App',
    components: {
        Header,
        Section,
        Sectionpart,
        mains,
        shop,
        blog,
        servi,
        foot
    }

}
</script>

<style>

</style>
