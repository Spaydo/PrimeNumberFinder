/*
質數特性
1.最小的質數是2。
2.除2以外的質數都是奇數。
3.所有非質數都可做質因數分解。
4.非質數的最大質因數不會大於他的平方根。
*/
class MainPanel extends eui.Component
{
    public MainGroup: eui.Group;
    public MinMaxGroup: eui.Group;
    public InputMax: eui.EditableText;
    public InputMin: eui.EditableText;
    public EnableSetMin: eui.CheckBox;
    public SumNum: eui.Label;
    public Result: eui.Label;
    public StartSearch: eui.Button;
    public InspectorGroup: eui.Group;


    /** 最大被查找值 */
    private MaxNum: number = 0;
    /** 最小被查找值 */
    private MinNum: number = FixedParameter.MinPrimeNumber;
    /** 範圍內質數總數 */
    private SumPrimeNum: number = 0;
    /** 以確認質數清單 */
    private ConfirmedPrime: Array<number> = [];



    constructor()
    {
        super();
        this.skinName = MainSkin;

        this.InputMin.touchEnabled = this.EnableSetMin.selected;


        this.StartSearch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Search, this.StartSearch);
        this.InputMax.addEventListener(egret.Event.FOCUS_IN, this.ClearMaxFocusIn, this);
        this.InputMax.addEventListener(egret.Event.CHANGE, this.MaxTxtChange, this);
        this.InputMax.addEventListener(egret.Event.FOCUS_OUT, this.ShowMaxTxtFocusOut, this);
    }

    /** 最大值改變 */
    private MaxTxtChange()
    {
        this.MaxNum = parseInt(this.InputMax.text);
    }

    /** Max 獲得焦點 清除內容 */
    private ClearMaxFocusIn(/*a:Event,b:eui.EditableText*/)
    {
        // console.log(a);
        // console.log(b);
        this.InputMax.text = "";
    }

    /** Max 失去焦點 */
    private ShowMaxTxtFocusOut()
    {
        this.InputMax.text = this.MaxNum > 0 ? String(this.MaxNum) : "";
    }

    /** 開始搜尋 */
    private Search()
    {
        console.log("開始搜尋");
        let aa = this.InputMax.text = "11111";
        let maxInput: number = parseInt(aa);
        console.log(maxInput);
        // if(maxInput>)


    }
}