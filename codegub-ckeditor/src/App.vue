<template>
    <div id="app" class="app">
        <smart-editor v-model="editorData" />
        <!-- <p>{{ editorData }}</p> -->
        <!-- <page-editor /> -->
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            editorData: `<h1 data-id="ae80ea5f-8474-4078-b997-64d2e741c263" style="text-align: center">🎉开始编辑！！！🎉</h1>
                <table data-table-auto="false" style="minWidth: 100px"><colgroup><col><col><col><col></colgroup><tbody><tr><td colspan="1" rowspan="1" data-background-color="#3DA742" style="background-color:#3DA742" data-line-class="line" class="line"><p data-id="43275ce3-9064-45f1-b58e-5978824f1924"></p></td><td colspan="1" rowspan="1" style="background-color:null"><p data-id="2250a415-3f2e-482d-b55e-63051833175d"></p></td><td colspan="1" rowspan="1" data-background-color="rgb(255, 218, 81)" style="background-color:rgb(255, 218, 81)"><p data-id="03efb055-1a97-4244-95c8-4d70fc00bf76"></p></td><td colspan="1" rowspan="1" style="background-color:null"><p data-id="76e4d9b3-7e89-4499-91de-169877165c60"></p></td></tr><tr><td colspan="1" rowspan="1" style="background-color:null"><p data-id="c3a8e33f-bd66-4742-9eac-50e70ced2162"></p></td><td colspan="1" rowspan="1" data-background-color="rgb(255, 218, 81)" style="background-color:rgb(255, 218, 81)"><p data-id="293fcc06-4132-4d15-8864-98d89a468b02"></p></td><td colspan="1" rowspan="1" style="background-color:null"><p data-id="dcfa69fd-23b5-4379-89e5-439238780fb6"></p></td><td colspan="1" rowspan="1" data-background-color="rgb(255, 218, 81)" style="background-color:rgb(255, 218, 81)"><p data-id="e064699c-42c0-47f1-87dc-63ef76594e56"></p></td></tr><tr><td colspan="1" rowspan="1" data-background-color="rgb(255, 218, 81)" style="background-color:rgb(255, 218, 81)"><p data-id="b0d1b2c1-b2fe-485b-89ab-33ff9bf1a44a"></p></td><td colspan="1" rowspan="1" style="background-color:null"><p data-id="95a39b5b-7c78-4a6a-866a-362b31550d28"></p></td><td colspan="1" rowspan="1" data-background-color="rgb(255, 218, 81)" style="background-color:rgb(255, 218, 81)"><p data-id="ee76f4f3-ec83-40d6-87f3-d3bbaf93d1ba"></p></td><td colspan="1" rowspan="1" style="background-color:null"><p data-id="3142d6a5-a6b4-4fc4-9592-7e369d6259c2"></p></td></tr></tbody></table>
                <p data-id="9a086ebe-cf55-486c-8d3d-d9429b62f472"></p><p data-id="8f07a382-c566-459d-aa85-b4c349582871">因为<span data-latex="x:=10" data-evaluate="no" data-display="no" data-type="inlineMath">$x:=10$</span>，又因为<span data-latex="y:=x^2 + 20x-50" data-evaluate="no" data-display="no" data-type="inlineMath">$y:=x^2 + 20x-50$</span> ，求<span data-latex="y" data-evaluate="no" data-display="no" data-type="inlineMath">$y$</span>为多少（点击<span data-latex="y" data-evaluate="no" data-display="no" data-type="inlineMath">$y$</span>即可得到答案）</p>
                <p data-id="dd4136b5-0f70-46f2-a135-008b442fc411"><span  style="font-size: 30px"><strong>粗体</strong></span></p><p data-id="4e6048b6-df06-4c0b-aa87-378ae0ec17a1" style="text-align: center"><em>斜线</em></p><p data-id="3b850380-a663-461f-8e5e-b0ab430d9327" style="text-align: right"><u>下划线</u></p><p data-id="ffc08ddf-7879-4b17-9f05-0ff1e4365bbd"><s>删除线</s></p><p data-id="3f26bcc9-62b5-4e63-97d9-a8b719181b27"><span style="color: #FF4C00">文本颜色</span></p><p data-id="0fee55c8-f455-49cf-b8c4-c2fc594cac72"><mark data-color="#3DA742" style="background-color: #3DA742; color: inherit">背景颜色</mark></p><p data-id="ddcccf0f-5188-4be6-a506-3e4ed9d9552c"><code>code</code> </p><pre><code>function eleIncludeClasses(ele, classes) {
                if (!ele || !ele.classList) return false;
                const classList = ele.classList;
                return !!classes.find((classname) =&gt; classList?.contains(classname));
                }</code></pre><p data-id="73adb35b-97d4-4a79-bbd5-9e5db539f1cf"></p><p data-id="ab3e99ff-0370-4967-b32e-50c40f5fb15b"></p>`
        };
    }
};
</script>
<style scoped></style>
