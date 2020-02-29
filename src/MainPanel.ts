/*
質數特性
1.最小的質數是2。
2.除2以外的質數都是奇數。
3.所有非質數都可做質因數分解。
4.非質數的最大質因數不會大於他的平方根。
*/
class MainPanel extends eui.Component
{
    // 結果顯示器
    public Result: eui.Label;
    // 輸入端
    public InputMax: eui.EditableText;
    // 開始按鈕
    public StartSearch: eui.Button;

    /** 目標數字 */
    private TargetNum: number = 0;

    constructor()
    {
        super();
        this.skinName = MainSkin;

        this.StartSearch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Search, this);

        this.InputMax.addEventListener(egret.Event.FOCUS_IN, this.ClearMaxFocusIn, this);
        this.InputMax.addEventListener(egret.Event.CHANGE, this.MaxTxtChange, this);
        this.InputMax.addEventListener(egret.Event.FOCUS_OUT, this.ShowMaxTxtFocusOut, this);
    }

    /** 最大值改變 */
    private MaxTxtChange()
    {
        let target: number = parseInt(this.InputMax.text);
        this.TargetNum = target >= 2 ? target : 0;
    }

    /** Max 獲得焦點 清除內容 */
    private ClearMaxFocusIn()
    {
        this.InputMax.text = "";
    }

    /** Max 失去焦點 */
    private ShowMaxTxtFocusOut()
    {
        this.InputMax.text = this.TargetNum > 0 ? String(this.TargetNum) : "";
    }

    /** 開始搜尋 */
    private Search()
    {
        console.log("開始搜尋");

        let target: number = this.TargetNum;
        // 不在正常查找範圍內的數 要提示使用者
        if (target < FixedParameter.MinPrimeNumber)
        {
            this.Result.text = FixedParameter.TipOfNoTargetNumber;
            return;
        }

        // 開始查找

        let isPrimeNum: boolean = true;
        // 最大驗證數只到目標數的開根號
        let maxValue: number = Math.sqrt(target);

        for (let curNum: number = 2; curNum <= maxValue; curNum++)
        {
            // 可被數整除 當前數為因數 當前判斷的目標數字不為質數
            if (target % curNum == 0)
            {
                isPrimeNum = false;
                break;
            }
        }

        if (isPrimeNum)
        {
            this.Result.text = FixedParameter.TargetIsPrimeNum.replace("{0}", String(target));
        }
        else
        {
            this.Result.text = FixedParameter.TargetNotPrimeNum.replace("{0}", String(target));
        }
    }
}