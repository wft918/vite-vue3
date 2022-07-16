<template>
  <div>1212</div>
</template>
<script setup>
import X2js from 'x2js'
import { onMounted } from 'vue'

onMounted(() => {
  analysisXml1()
})

const analysisXml1 = () => {
  // 实例化
  let x2js = new X2js()
  // 这个就是将来后台返回给我们的xml数据，这里写死为了测试
  let xml = '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soap:Body><ns1:getSDLengthByJMLXResponse xmlns:ns1="http://server.Gw"><ns1:out>&lt;?xml version="1.0" encoding="UTF-8"?&gt;&lt;NODES&gt;&lt;NODE&gt;&lt;NAME&gt;方沟&lt;/NAME&gt;&lt;VALUE&gt;337.9432807&lt;/VALUE&gt;&lt;/NODE&gt;&lt;NODE&gt;&lt;NAME&gt;砖混&lt;/NAME&gt;&lt;VALUE&gt;66.8424335&lt;/VALUE&gt;&lt;/NODE&gt;&lt;NODE&gt;&lt;NAME&gt;盾构&lt;/NAME&gt;&lt;VALUE&gt;14.8955979&lt;/VALUE&gt;&lt;/NODE&gt;&lt;NODE&gt;&lt;NAME&gt;暗挖&lt;/NAME&gt;&lt;VALUE&gt;48.1186321&lt;/VALUE&gt;&lt;/NODE&gt;&lt;NODE&gt;&lt;NAME&gt;顶管&lt;/NAME&gt;&lt;VALUE&gt;2.9357091&lt;/VALUE&gt;&lt;/NODE&gt;&lt;NODE&gt;&lt;NAME&gt;总长度&lt;/NAME&gt;&lt;VALUE&gt;1272.8081174&lt;/VALUE&gt;&lt;/NODE&gt;&lt;NODE&gt;&lt;NAME&gt;检查井总数&lt;/NAME&gt;&lt;VALUE&gt;94885&lt;/VALUE&gt;&lt;/NODE&gt;&lt;/NODES&gt;</ns1:out></ns1:getSDLengthByJMLXResponse></soap:Body></soap:Envelope>'
  // 将xml解析为我们需要的json对象
  let json = x2js.xml2js(xml)
  // 因为解析的里面的__text还是个xml，所以还得再转一次
  var newjson = x2js.xml2js(json.Envelope.Body.getSDLengthByJMLXResponse.out.__text)
  console.log(newjson, '----->>>')
}

const analysisXml2 = () => {
  // 实例化
  let x2js = new X2js()
  // 这个就是将来后台返回给我们的xml数据，这里写死为了测试
  let xml = '<person><age value="too young" /><experience value="too simple" /><result value="sometimes naive" /></person>'
  // 将xml解析为我们需要的json对象
  let json = x2js.xml2js(xml)
  console.log(json, '----->>>')
}
</script>
<style scoped>

</style>