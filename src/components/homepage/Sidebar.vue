<template>
    <div class="sidebar">
      <div class="mui-content" style="width: 78rem;margin: auto">
        <div class="mui-row">
          <div class="mui-col-sm-2">
            <div id="segmentedControl" style="border: 0" class="mui-segmented-control">
              <p>
                <a class="mui-control-item mui-active" href="#item1">待办公文（8）</a>
              </p>
              <p>
                <a class="mui-control-item" href="#item2">已办公文</a>
              </p>
              <p>
                <a class="mui-control-item" href="#item3">全部公文</a>
              </p>
              <p>
                <a class="mui-control-item" href="#item4">全部公文</a>
              </p>
              <p>
                <a class="mui-control-item" href="#item5">全部公文</a>
              </p>
              <p>
                <a class="mui-control-item" href="#item6">全部公文</a>
              </p>
            </div>
          </div>
          <div class="mui-col-sm-10">
            <div>
              <!--第一个侧导航-->
              <div id="item1" class="mui-control-content mui-active">
                <!--上部辅导航 客户选择-->
                <ul class="mui-table-view">
                  <li class="mui-table-view-cell">
                    <div class="new-sidebar-right-top-box">
                      <div class="new-sidebar-right-stratum"></div>
                      <div class="new-sidebar-right-uper">
                        <div id="segmentedControls" style="border: 0;margin-top: 2rem" class="mui-segmented-control">
                          <a class="mui-control-item mui-active new-radius" href="#items1">待办公文（8）</a>
                          <a class="mui-control-item new-radius" href="#items2">全部公文</a>
                          <a class="mui-control-item new-radius" href="#items3">全部公文</a>
                        </div>
                        <div id="items1" class="mui-control-content mui-active">
                          <ul class="mui-table-view">
                            <li class="mui-table-view-cell" style="text-align: left">
                              <input type="text" placeholder="请输入客户名称" class="new-select-style">
                              <select class="new-select-style">
                                <option>请选择合格状态</option>
                              </select>
                              <select class="new-select-style">
                                <option>投资者分类</option>
                                <option>甲方</option>
                              </select>
                              <select class="new-select-style">
                                <option>风险偏好</option>
                                <option>甲方</option>
                              </select>
                              <div class="mui-btn mui-btn-primary" style="position: relative;top: 1.1rem;">
                                蓝色
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div id="items2" class="mui-control-content">
                          <ul class="mui-table-view">
                            <li class="mui-table-view-cell">
                              已办公文
                            </li>
                          </ul>
                        </div>
                        <div id="items3" class="mui-control-content">
                          <ul class="mui-table-view">
                            <li class="mui-table-view-cell">
                              全部公文3
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="new-sidebar-right-bottom-box">
                  <div class="new-sidebar-right-bottom-bg">
                    <div class="new-paging">
                      <!--分页查询-->
                      <div class="mui-content-padded">
                        <ul class="mui-pagination">
                          <li class="mui-previous mui-disabled">
                            <a href="javascript:(0)">«</a>
                          </li>
                          <li class="mui-active"><a href="javascript:(0)">1</a></li>
                          <li><a href="javascript:(0)">2</a></li>
                          <li><a href="javascript:(0)">3</a></li>
                          <li><a href="javascript:(0)">4</a></li>
                          <li><a href="javascript:(0)">5</a></li>
                          <li class="mui-next">
                            <a href="javascript:(0)">»</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="new-sidebar-right-bottom-nav">
                    <div style="text-align: left">
                      <button type="button" style="margin-left: 7%" class="mui-btn">新增客户</button>
                      <button type="button" class="mui-btn">下载产品客户导入模板</button>
                      <button type="button" class="mui-btn">导入数据</button>
                    </div>
                    <!--客户数据展示-->
                    <div>
                      <!--首页数据展示-->
                      <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                          <div class="mui-row"  style="line-height: 33px;">
                            <div class="mui-col-sm-1">客户名称</div>
                            <div class="mui-col-sm-1">客户编码</div>
                            <div class="mui-col-sm-1">公司证件</div>
                            <div class="mui-col-sm-1">合规资料</div>
                            <div class="mui-col-sm-1">风险问卷</div>
                            <div class="mui-col-sm-1">评测分数</div>
                            <div class="mui-col-sm-2">风险承受能力</div>
                            <div class="mui-col-sm-2">投资者分类</div>
                            <div class="mui-col-sm-1">合格状态</div>
                            <div class="mui-col-sm-1">操作</div>
                          </div>
                        </li>
                        <li class="mui-table-view-cell">
                          <div class="mui-row" style="line-height: 33px;">
                            <div class="mui-col-sm-1">001</div>
                            <div class="mui-col-sm-1">CP001</div>
                            <div class="mui-col-sm-1">未上传</div>
                            <div class="mui-col-sm-1">未上传</div>
                            <div class="mui-col-sm-1">未上传</div>
                            <div class="mui-col-sm-1">0</div>
                            <div class="mui-col-sm-2">无限制</div>
                            <div class="mui-col-sm-2">专业投资者</div>
                            <div class="mui-col-sm-1">已认证</div>
                            <div class="mui-col-sm-1">
                              <Operation v-bind="aaa"></Operation>
                            </div>
                          </div>
                        </li>
                        <li class="mui-table-view-cell">
                          <div class="mui-row" style="line-height: 33px;">
                            <div class="mui-col-sm-1">001</div>
                            <div class="mui-col-sm-1">CP001</div>
                            <div class="mui-col-sm-1">未上传</div>
                            <div class="mui-col-sm-1">未上传</div>
                            <div class="mui-col-sm-1">未上传</div>
                            <div class="mui-col-sm-1">0</div>
                            <div class="mui-col-sm-2">无限制</div>
                            <div class="mui-col-sm-2">专业投资者</div>
                            <div class="mui-col-sm-1">已认证</div>
                            <div class="mui-col-sm-1">
                              <Operation v-bind="aaa"></Operation>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!--第二个侧导航-->
              <div id="item2" class="mui-control-content">
                <ul class="mui-table-view">
                  <li class="mui-table-view-cell">
                    第二个选项卡子项-1
                  </li>
                  <li class="mui-table-view-cell">
                    第二个选项卡子项-2
                  </li>
                  <li class="mui-table-view-cell">
                    第二个选项卡子项-3
                  </li>
                </ul>
              </div>
              <!--第三个侧导航-->
              <div id="item3" class="mui-control-content">
                <ul class="mui-table-view">
                  <li class="mui-table-view-cell">
                    第三个选项卡子项-1
                  </li>
                  <li class="mui-table-view-cell">
                    第三个选项卡子项-2
                  </li>
                  <li class="mui-table-view-cell">
                    第三个选项卡子项-3
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Operation from './Operation'
export default {
  name: 'app',
  components: {Operation},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      navs: []
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a:hover{
  color: #666666;
}
.new-radius{
  border-top-left-radius: .9rem;
  border-top-right-radius: .9rem;
}
.new-select-style{
  width: 13rem;
  display: inline-block;
  margin-bottom: 0
}
.new-sidebar-right-stratum{
  position: absolute;
  height: 8rem;
  background: #ec971f;
  width: 93%
}
.new-sidebar-right-uper{
  position: absolute;
  height: 7rem;
  background: #6641e2;
  width: 93%;
  top: 1rem;
  margin-left: 7%
}
.new-sidebar-right-top-box{
  position: relative;
  height: 8rem;
}
.new-sidebar-right-bottom-box{
  position:relative;
  height: 50rem;
  padding: 11px 15px;
  margin-top: 2rem;
}
.new-sidebar-right-bottom-bg{
  height: 40rem;
  background: #dd524d;
  width: 93%;
  margin-left: 7%;
  margin-top: 3rem;
  position: absolute;
  right: 15px
}
.new-paging{
  position: absolute;
  bottom: -.7rem;
  right: 5rem
}
.new-sidebar-right-bottom-nav{
  height: 40rem;
  background: #525552;
  width: 93%;
  position: absolute
}
</style>
