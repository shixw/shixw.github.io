(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{323:function(e,l,i){"use strict";i.r(l);var t=i(7),v=Object(t.a)({},(function(){var e=this,l=e._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h2",{attrs:{id:"java线程池常用配置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#java线程池常用配置"}},[e._v("#")]),e._v(" Java线程池常用配置")]),e._v(" "),l("ul",[l("li",[e._v("默认值")]),e._v(" "),l("li",[l("ul",[l("li",[e._v("corePoolSize=1")]),e._v(" "),l("li",[e._v("queueCapacity=Integer.MAX_VALUE")]),e._v(" "),l("li",[e._v("maxPoolSize=Integer.MAX_VALUE")]),e._v(" "),l("li",[e._v("keepAliveTime=60s")]),e._v(" "),l("li",[e._v("allowCoreThreadTimeout=false")]),e._v(" "),l("li",[e._v("rejectedExecutionHandler=AbortPolicy()")])])]),e._v(" "),l("li",[e._v("如何来设置")]),e._v(" "),l("li",[l("ul",[l("li",[e._v("需要根据几个值来决定")]),e._v(" "),l("li",[l("ul",[l("li",[e._v("tasks ：每秒的任务数，假设为500~1000")]),e._v(" "),l("li",[e._v("taskcost：每个任务花费时间，假设为0.1s")]),e._v(" "),l("li",[e._v("responsetime：系统允许容忍的最大响应时间，假设为1s")])])]),e._v(" "),l("li",[e._v("做几个计算")]),e._v(" "),l("li",[l("ul",[l("li",[e._v("corePoolSize = 每秒需要多少个线程处理？")]),e._v(" "),l("li",[l("ul",[l("li",[e._v("threadcount = tasks/(1/taskcost) =tasks*taskcout =  (500~1000)*0.1 = 50~100 个线程。corePoolSize设置应该大于50")]),e._v(" "),l("li",[e._v("根据8020原则，如果80%的每秒任务数小于800，那么corePoolSize设置为80即可")])])]),e._v(" "),l("li",[e._v("queueCapacity = (coreSizePool/taskcost)*responsetime")]),e._v(" "),l("li",[l("ul",[l("li",[e._v("计算可得 queueCapacity = 80/0.1*1 = 80。意思是队列里的线程可以等待1s，超过了的需要新开线程来执行")]),e._v(" "),l("li",[e._v("切记不能设置为Integer.MAX_VALUE，这样队列会很大，线程数只会保持在corePoolSize大小，当任务陡增时，不能新开线程来执行，响应时间会随之陡增。")])])]),e._v(" "),l("li",[e._v("maxPoolSize = (max(tasks)- queueCapacity)/(1/taskcost)")]),e._v(" "),l("li",[l("ul",[l("li",[e._v("计算可得 maxPoolSize = (1000-80)/10 = 92")]),e._v(" "),l("li",[e._v("（最大任务数-队列容量）/每个线程每秒处理能力 = 最大线程数")])])]),e._v(" "),l("li",[e._v("rejectedExecutionHandler：根据具体情况来决定，任务不重要可丢弃，任务重要则要利用一些缓冲机制来处理")]),e._v(" "),l("li",[e._v("keepAliveTime和allowCoreThreadTimeout采用默认通常能满足")])])])])])])])}),[],!1,null,null,null);l.default=v.exports}}]);