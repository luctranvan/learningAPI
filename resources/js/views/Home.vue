<template>
    <div class="animated fadeIn">
        <h3>ダッシュボ一 ド</h3>
        <div>
            <select class="form-control select-time">
                <option value="day">日</option>
                <option value="week">週</option>
                <option value="month">月</option>
            </select>
        </div>
        <div class="my-tab">
            <ul class="nav nav-tabs" id="myTab">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#tabOne">シングル</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tabTwo">デュオ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tabThree">スクワッド卜</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tabFour">クインテツト</a>
                </li>
            </ul>
            <div class="tab-content pt-3" id="myTabContent">
                <div class="tab-pane fade active show" id="tabOne">
                    <div class="row">
                        <div class="col-6">
                            <h5>ユ一ザ一</h5>
                            <p>179<span>ユ一ザ一</span></p>
                            <p>15.5% <img src="../assets/green-up.png"></p>
                        </div>
                        <div class="col-6">
                            <h5>大会</h5>
                            <p>179<span>大会</span></p>
                            <p>15.5% <img src="../assets/red-down.png"></p>
                        </div>
                    </div>
                    <div>
                        <h3>ランキングのプレィャ一</h3>
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th scope="col">ランキンク</th>
                                <th scope="col">名繭</th>
                                <th scope="col">win/lost</th>
                                <th scope="col">鱒攣</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="tab-pane fade" id="tabTwo">Tab Two Content</div>
                <div class="tab-pane fade" id="tabThree">Tab Three Content</div>
                <div class="tab-pane fade" id="tabFour">eeTab Four Content</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dashboard'
}
</script>
<style scoped>
.select-time {
    width: 62px;
}

.my-tab {
    margin-top: 20px;
}
.nav-link:hover{
    background-color: unset;
    margin: 0px;
}
.nav-link{
    border-bottom: 2px solid #dfe1e5;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
}
.nav-tabs .nav-link.active {
    font-weight: bolder;
    color: #3c7ffd;
    background: unset;
    border-bottom: 2px solid #3c7ffd;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
}
.tab-content {
    margin-top: -1px;
    background: unset;
    border: 0;
}
.nav-tabs {
     border-bottom: 0px;
}
.nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {
    border: 0;
}
</style>
