window.DAILY_BRIEFS = [
  {
    issue: 11,
    date: "2026-08-13",
    dateLabel: "2026年8月13日 · ISSUE 11",
    updatedAt: "2026-08-13 10:00",
    title: "宽带波束斜视：固定相移为何让OAM模态随频率漂移",
    summary: "从相位与时延的区别出发，解释宽带相控阵的波束斜视怎样扩展为均匀圆阵的方向、焦点与OAM模态共同失配；给出相移器和真时延的可测对照，并把结论落到宽带OAM抗干扰链路的模态串扰、输出SINR与BER。近7日未发现足够可靠的新动态，本期采用ITU-R官方进展和2026年1024阵元实测论文推进理论主线。",
    readingMinutes: 24,
    modules: [
      {
        label: "今日结论",
        title: "宽带阵列不能把中心频率的一组相位直接复制到所有频率",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "list", items: [
            "Phase shifter（PS，相移器）给各阵元施加近似固定的相位差；True Time Delay（TTD，真时延）给各阵元施加固定的传播时间差。直观上，相移器只在一个音高上把合唱对齐，真时延则把每个人的入场时刻对齐，所以后者更适合宽带信号。",
            "Beam squint（波束斜视）是固定相移权值在偏离设计频率后指向发生变化。对均匀圆阵与Orbital Angular Momentum（OAM，轨道角动量）接收而言，问题不只是一条主瓣转动：有限孔径上的相位、幅度和模态投影也会随子载波改变。",
            "2026年4月17日发表的1024阵元Ku波段实测论文报告：在60°扫描和800 MHz带宽内，子阵级TTD与阵元级PS混合架构把最大指向误差由±3.5°降至±1°；发送600 MHz、64 Quadrature Amplitude Modulation（64QAM，64阶正交幅度调制）信号时，Error Vector Magnitude（EVM，误差矢量幅度）由大于7%改善到小于2%。这是宽带相控阵证据，不是OAM抗干扰实证。",
            "OAM课题中应逐频点报告模态串扰矩阵、目标模态纯度、输出Signal-to-Interference-plus-Noise Ratio（SINR，信干噪比）和Bit Error Rate（BER，误码率），不能只展示中心频率的螺旋相位图。",
            "截至北京时间2026年8月13日，近7日未发现足够可靠、直接关联宽带OAM阵列或相控阵抗干扰的新动态。本期不制造热点，采用2026年同行评审实测论文、ITU-R截至2026年7月的官方进展和常青理论资料。"
          ] },
          { type: "sources", items: [
            { label: "Science China Information Sciences：TTD-PS混合宽带相控阵实测（2026-04-17）", url: "https://doi.org/10.1007/s11432-025-4884-2" },
            { label: "ITU-R：IMT-2030提交与评估进程（状态截至2026年7月）", url: "https://www.itu.int/en/ITU-R/study-groups/rsg5/rwp5d/imt-2030/Pages/submission-eval.aspx" }
          ] }
        ],
        tags: ["宽带阵列", "波束斜视", "真时延", "模态失配"]
      },
      {
        label: "核心理论",
        title: "从固定相位到固定时延：斜视怎样进入OAM模态谱",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "text", text: "直观解释：阵列把每个阵元的复电场看成一支旋转箭头。要让来自目标方向的箭头同向相加，阵元补偿必须抵消真实传播时差。频率改变时，同一传播时差对应的相位角会按频率成比例改变；固定相移器却不跟着改变，因此箭头逐渐散开，主瓣、焦点或模态都会偏离设计状态。" },
          { type: "heading", text: "条件与变量：先看一维阵列的方向漂移" },
          { type: "text", text: "设f₀＝设计中心频率，单位Hz；f＝实际频率，单位Hz；d＝相邻阵元间距，单位m；c＝真空光速，约3×10⁸ m/s；θ₀＝设计扫描角，单位rad；θ(f)＝频率f处的实际主瓣角，单位rad；n＝阵元序号，量纲为1。采用阵列法线为0°的角度约定。物理图像是路径差d sinθ产生传播时差。" },
          { type: "formula", text: "τₙ=n·d·sinθ₀/c；　φₙ(f)=−2πfτₙ" },
          { type: "text", text: "若硬件只保存中心频率相位φₙ(f₀)，在频率f处相长条件给出下式。它说明相对带宽越大、扫描角越大，方向漂移通常越明显；当右端绝对值超过1时，该理想主瓣条件甚至没有实数角度解。" },
          { type: "formula", text: "sinθ(f)=(f₀/f)sinθ₀；　Δθ(f)=θ(f)−θ₀" },
          { type: "heading", text: "圆阵与OAM：角向相位标签不等于完整宽带补偿" },
          { type: "text", text: "设N＝圆阵阵元数，量纲为1；a＝圆阵半径，单位m；ϕₙ＝2πn/N＝第n阵元方位角，单位rad；ℓ＝OAM拓扑荷，量纲为1；u₀＝目标传播方向单位向量；rₙ＝第n阵元位置向量，单位m；k(f)＝2πf/c＝波数，单位rad/m。仅施加exp(jℓϕₙ)能形成角向相位绕转，但若还要把能量指向非轴向目标，必须补偿随频率变化的几何传播相位。" },
          { type: "formula", text: "wₙ,PS=exp[jℓϕₙ]·exp[−jk(f₀)u₀·rₙ]" },
          { type: "formula", text: "wₙ,TTD(f)=exp[jℓϕₙ]·exp[−j2πfτₙ]，　τₙ=u₀·rₙ/c" },
          { type: "text", text: "第一式在f₀精确匹配；第二式的几何项随f变化，因此保持方向补偿。需要注意，exp(jℓϕₙ)本身若由固定相移实现，离散端口标签仍保持不变，但实际传播、阵元方向图、互耦和接收孔径投影都会随频率变化，所以接收模态纯度并不自动恒定。" },
          { type: "heading", text: "公式：用逐频模态串扰而不是单点纯度评价" },
          { type: "text", text: "令H(f)＝频率f处从发射端口到接收端口的复信道矩阵；F＝单位化Discrete Fourier Transform（DFT，离散傅里叶变换）矩阵；C(f)＝模态域信道矩阵。上标H表示共轭转置。C(f)的非对角元素表示不同离散角向模态之间的耦合。" },
          { type: "formula", text: "C(f)=FᴴH(f)F；　XTℓ(f)=10log₁₀[Σₘ≠ℓ|Cₘℓ(f)|²/|Cℓℓ(f)|²]" },
          { type: "text", text: "XTℓ＝第ℓ模态的相对串扰，单位dB；数值越负，带外泄漏越小。与课题的关系是：固定相移、逐频数字权值和TTD应在相同孔径、功率和信道条件下比较，并同时观察带内最差XTℓ、输出SINR和BER。" }
        ],
        tags: ["固定相移", "传播时延", "逐频信道", "模态串扰"]
      },
      {
        label: "课题连接",
        title: "把宽带OAM抗干扰主张拆成可成立、有限制与待验证三层",
        tone: "accent",
        blocks: [
          { type: "heading", text: "合理结论" },
          { type: "list", items: [
            "固定模拟相移权值会使阵列响应随频率失配。若期望信号与干扰依靠空间或模态差异分离，失配会改变两者在各子载波上的投影，并可能抬高带边残余干扰。",
            "数字基带可对每个Orthogonal Frequency Division Multiplexing（OFDM，正交频分复用）子载波使用不同权值；直观上，它把宽带问题拆成许多窄带问题，但需要足够的射频通道和逐频Channel State Information（CSI，信道状态信息）。",
            "TTD能校正由几何路径差引起的一阶线性相位，但不能自动修复阵元色散、频变互耦、功率放大器非线性、接收偏轴和多径。"
          ] },
          { type: "heading", text: "适用条件" },
          { type: "text", text: "简单斜视公式假设远场平面波、阵元近似相同、窄带阵元方向图和理想连续相移。近场大孔径系统还会出现焦距随频率漂移；宽带OAM系统则需直接使用H(f)或实测复场，不能只把一维扫描公式套到圆阵。" },
          { type: "formula", text: "SINRout(f)=Ps(f)|wᴴ(f)hs(f)|²/[wᴴ(f)(RJ(f)+Rn(f))w(f)]" },
          { type: "text", text: "Ps(f)＝期望信号功率谱，单位W/Hz；hs(f)＝期望信号导向向量；RJ(f)＝干扰协方差矩阵，单位W/Hz；Rn(f)＝噪声协方差矩阵，单位W/Hz；w(f)＝接收权值。物理图像是每个频率都有自己的一组空间箭头和相消条件。" },
          { type: "heading", text: "仍有争议或待验证" },
          { type: "list", items: [
            "“拓扑荷在宽带内不变”不能推出“通信模态在宽带内正交”。前者描述理想相位绕转标签，后者还取决于有限接收孔径、信道和频变硬件。",
            "“TTD后OAM天然抗干扰”仍无普遍依据。需要在相同输入Jam-to-Signal ratio（J/S，干信比）、孔径、射频通道数和总功耗下，与逐子载波常规波束形成比较。",
            "平均带宽指标可能掩盖带边失效。至少应同时报告带内中位数、5%分位数和最差值，并说明CSI误差与更新速率。"
          ] },
          { type: "text", text: "本期仅从公开、防御性和学术性角度讨论接收端鲁棒性，不提供干扰他人通信的设备参数或部署指导。" }
        ],
        tags: ["OFDM逐频权值", "频变信道", "证据边界", "公平对照"]
      },
      {
        label: "行业需求",
        title: "热点不足时，更应把“宽带扫描”翻译成联合验收指标",
        layout: "wide",
        tone: "industry",
        priority: "证据分级",
        blocks: [
          { type: "heading", text: "A｜1024阵元实测把宽带、扫描与调制质量连到一起（强证据：同行评审实测，2026-04-17）" },
          { type: "text", text: "Jiang等构建了由四块256阵元面板拼接的1024阵元Ku波段阵列，在子阵级使用四颗TTD芯片、阵元级使用PS。60°扫描、800 MHz带宽下，最大指向误差从纯PS架构的±3.5°降至混合架构的±1°；600 MHz、64QAM传输中，EVM由大于7%改善至小于2%。证据直接支持混合TTD-PS缓解波束斜视，但没有测试OAM模态或抗干扰性能。" },
          { type: "list", items: [
            "相控阵验收：工作带宽、扫描范围、带内指向误差、扫描损耗、旁瓣电平、群时延纹波、EVM、每通道功耗和校准时间。",
            "OAM/结构化场验收：逐频模态串扰矩阵、带内最差模态纯度、接收孔径占比、偏轴容差，以及拓扑荷与频率映射是否稳定。",
            "高可靠接收验收：给定J/S和干扰模型后，报告输出SINR、BER或Block Error Rate（BLER，块误码率）、零陷深度、期望信号增益损失及带边最差值。"
          ] },
          { type: "heading", text: "B｜IMT-2030评估从口号转向可复现实验环境（强证据：ITU-R官方状态）" },
          { type: "text", text: "ITU-R Working Party 5D（WP 5D，国际电联无线电通信部门第5D工作组）页面显示：截至2026年7月，独立评估组申请仍在审查；2026年6月完成的评估指南草案已纳入近场、空间非平稳和Integrated Sensing and Communication（ISAC，通信感知一体化）信道模型，并拟于2026年12月提交上级研究组审批。它目前是草案，不应写成已生效标准。" },
          { type: "text", text: "对课题的推论：大孔径、宽带和结构化场研究若要对接未来评估体系，应保存可复现的阵列几何、逐频复响应、噪声与干扰假设，而不是只交一张最佳频点方向图。证据强度属于从官方评估方向得出的工程推论，并非ITU-R对OAM路线的背书。" },
          { type: "sources", items: [
            { label: "同行评审论文：Design of a wideband phased array using TTD-PS hybrid beamforming（2026-04-17）", url: "https://doi.org/10.1007/s11432-025-4884-2" },
            { label: "ITU-R：IMT-2030评估指南草案官方说明（2026-06）", url: "https://www.itu.int/en/ITU-R/study-groups/rsg5/rwp5d/imt-2030/pages/default.aspx" },
            { label: "ITU-R：首版IMT-2030提交与独立评估组状态（截至2026-07）", url: "https://www.itu.int/en/ITU-R/study-groups/rsg5/rwp5d/imt-2030/Pages/submission-eval.aspx" }
          ] }
        ],
        tags: ["1024阵元", "Ku波段", "EVM", "IMT-2030评估"]
      },
      {
        label: "CST × MATLAB",
        title: "最小任务：比较固定相移与逐频真时延的模态稳定性",
        blocks: [
          { type: "text", text: "目标是在60—90分钟内得到三张可核查曲线：主瓣角随频率、目标模态纯度随频率、模态串扰随频率。先用理想端口完成闭环，再决定是否加入真实贴片。" },
          { type: "list", items: [
            "CST：建立N＝8的Uniform Circular Array（UCA，均匀圆阵），中心频率f₀＝10 GHz，半径a＝0.75λ₀；使用相同离散端口或理想辐射源，扫频9—11 GHz。λ₀＝c/f₀为中心频率波长，单位m。",
            "工况PS：选ℓ＝1、目标方向θ₀＝30°、方位角0°；按中心频率计算一组固定复激励，并在全部频点保持相位不变。",
            "工况TTD：MATLAB按每个频点计算几何相位exp[−j2πfτₙ]，再乘OAM项exp(jℓϕₙ)；若CST不能在单次任务中直接设置频变激励，就逐频导入复权值或用导出的嵌入方向图在线性叠加。",
            "导出：每个频点保存各端口Embedded Element Pattern（嵌入阵元方向图）或固定球面/平面采样上的复数电场，必须包含实部与虚部，并记录坐标、极化分量和相位符号约定。",
            "MATLAB：对接收圆周上的复场做角向DFT，计算η₁(f)＝目标ℓ＝1模态纯度、XT₁(f)和主能量方向；分别画PS与TTD曲线。",
            "验收：确认f₀处两工况近似一致；比较9 GHz和11 GHz的|Δθ|、η₁及XT₁。若TTD仍明显漂移，依次检查阵元方向图色散、互耦、采样圆位置、全局相位和频变幅度。"
          ] },
          { type: "formula", text: "η₁(f)=|b₁(f)|²/Σₘ|bₘ(f)|²；　bₘ(f)=Nₛ⁻¹Σq E(f,ϕq)e^(−jmϕq)" },
          { type: "text", text: "Nₛ＝接收圆周采样点数，量纲为1；E(f,ϕq)＝第q个方位采样点的复场，单位V/m；bₘ(f)＝第m个角向模态系数，单位V/m。保存一个CSV表，列为frequency_GHz、scheme、beam_angle_deg、eta_l1、XT_l1_dB，作为以后加入偏轴、互耦和干扰的基线。" }
        ],
        tags: ["9—11 GHz", "逐频激励", "嵌入方向图", "CSV基线"]
      },
      {
        label: "论文精读",
        title: "TTD-PS混合架构能否把大孔径宽带阵列做成可测系统",
        tone: "accent",
        blocks: [
          { type: "text", text: "本期精读Jiang等发表于Science China Information Sciences的2026年论文。它适合作为课题的工程参照，因为作者没有停留在算法曲线，而是把子阵真时延、阵元相移、1024阵元硬件和宽带调制测量放在同一条证据链上。" },
          { type: "heading", text: "研究问题" },
          { type: "text", text: "纯相移架构在大扫描角和宽带条件下产生波束斜视；每阵元完整TTD又会带来损耗、规模、功耗与控制复杂度。论文追问：能否用子阵级TTD承担粗略时延补偿，再用阵元级PS完成空间扫描，从而在硬件成本与带内稳定性之间折中？" },
          { type: "heading", text: "方法与结果" },
          { type: "text", text: "作者拼接四块256阵元Ku波段面板，并配置四颗TTD芯片；比较纯PS和TTD-PS混合架构。在60°扫描、800 MHz带宽内，最大指向误差由±3.5°降到±1°。在600 MHz、64QAM通信实验中，EVM从大于7%改善到小于2%。EVM衡量接收星座点相对理想位置的均方根偏差；越小通常表示幅相失真越轻。" },
          { type: "heading", text: "局限" },
          { type: "list", items: [
            "论文验证的是特定Ku波段面板、带宽和扫描角；不能直接外推到任意频段、近场焦点或圆阵。",
            "公开摘要没有给出OAM模态串扰、J/S、输出SINR或BER，因此不能把EVM改善解释为OAM抗干扰增益。",
            "子阵级TTD仍存在子阵内残余斜视；延时量化、群时延纹波、插入损耗、幅度不一致和校准开销需要结合全文及目标硬件复核。"
          ] },
          { type: "heading", text: "可复现价值" },
          { type: "text", text: "可先把1024阵元缩成8或16阵元圆阵，以纯PS、逐阵元TTD和每4阵元共享TTD三种架构比较带内最差指向误差、模态串扰与输出SINR。关键不是复刻其硬件规模，而是复刻“中心频点对齐—带内扫描—调制或链路指标”的证据顺序。" },
          { type: "sources", items: [
            { label: "论文原文页与DOI：Jiang et al., Science China Information Sciences 69, 150301（2026）", url: "https://doi.org/10.1007/s11432-025-4884-2" },
            { label: "大学研究记录：True Time Delay in Phased Arrays（同行评审综述）", url: "https://cris.tau.ac.il/en/publications/true-time-delay-in-phased-arrays/" }
          ] }
        ],
        tags: ["混合TTD-PS", "实测证据", "64QAM", "可缩放复现"]
      },
      {
        label: "术语与思考题",
        title: "把宽带阵列的时间、相位与链路指标对齐",
        layout: "wide",
        blocks: [
          { type: "list", items: [
            "True Time Delay, TTD（真时延）：对信号施加近似与频率无关的时间延迟；本期用于让几何补偿相位随频率线性变化。",
            "Phase Shifter, PS（相移器）：对射频信号施加设定相位；本期的固定PS仅在设计频率精确对齐。",
            "Beam squint（波束斜视）：主瓣方向随频率变化；本期是宽带模态和抗干扰失配的起点。",
            "Error Vector Magnitude, EVM（误差矢量幅度）：实测调制符号与理想符号之间的归一化误差；本期用于连接阵列斜视与通信质量。",
            "Orthogonal Frequency Division Multiplexing, OFDM（正交频分复用）：把宽带信号拆成多个窄带正交子载波；本期允许数字接收机逐子载波设置权值。",
            "Channel State Information, CSI（信道状态信息）：描述信道复增益、方向或矩阵的估计信息；本期决定逐频权值能否正确匹配真实传播。",
            "Group delay（群时延）：相位对角频率的负导数，单位s；本期用于判断硬件是否真正提供平坦时延，而不是只在若干频点相位接近。",
            "Mode crosstalk（模态串扰）：能量从目标角向模态泄漏到其他模态；本期用XTℓ(f)评价整个频带而非单一频点。"
          ] },
          { type: "heading", text: "思考题" },
          { type: "text", text: "一个8阵元UCA在f₀处用固定PS产生ℓ＝1并指向θ₀＝30°。系统相对带宽为20%，接收端用固定DFT投影。请分别讨论纯PS、逐阵元TTD和每4阵元共享TTD时，带边的主瓣角、模态串扰与输出SINR可能怎样排序；再说明为什么“TTD消除了方向斜视”仍不足以证明η₁(f)在全带宽保持不变。" }
        ],
        tags: ["TTD", "Beam squint", "EVM", "研究生思考题"]
      }
    ]
  },
  {
    issue: 10,
    date: "2026-08-10",
    dateLabel: "2026年8月10日 · ISSUE 10",
    updatedAt: "2026-08-10 12:21",
    title: "测量与误差：从幅相校准到OAM抗干扰性能边界",
    summary: "围绕阵列测量中的系统误差、随机误差和模型失配，解释幅相误差怎样泄漏OAM模态、抬高自适应零陷，并用不确定度传播和蒙特卡洛扫描把单次结果改写成可信性能区间。近7日未发现足够可靠的新动态，本期采用IEEE、NIST与26 GHz相控阵实测论文推进测量主线。",
    readingMinutes: 24,
    modules: [
      {
        label: "今日结论",
        title: "抗干扰实验的可信度取决于误差边界，而不只取决于最优曲线",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "list", items: [
            "阵列测量中的幅度误差、相位误差、阵元位置误差和仪器漂移会共同改变复数阵列响应。直观上，它们把原本整齐相加的阵元变成一群节拍略有偏差的合唱者，使主瓣下降、旁瓣升高，并让Orbital Angular Momentum（OAM，轨道角动量）能量泄漏到邻近模态。",
            "校准不是把某一条方向图修得好看，而是估计每个接收通道的复增益并建立可追溯参考。校准结果必须说明频率、方向、极化、温度、参考面和有效时间，否则不能默认跨工况复用。",
            "零陷深度对相位误差尤其敏感。理想仿真中的极深零点通常由精确相消产生；小幅失配就会填平零陷。因此应报告误差分布下的输出Signal-to-Interference-plus-Noise Ratio（SINR，信干噪比）分位数，而不只报告零误差条件下的峰值。",
            "2026年6月15日公开的26 GHz相控阵实测预印本表明，校准码本的条件数会控制测量噪声在求逆中的放大。论文用86个有效阵元验证：低条件数码本能以M＝N次测量取得与需要90次测量的参考方法接近的校准和扫描方向图。该结果支持校准方法，不直接证明OAM抗干扰增益。",
            "截至北京时间2026年8月10日，近7日未发现足够可靠、直接关联OAM阵列测量、相控阵校准或抗干扰验证的新动态。本期不制造热点，采用2026年6月预印本、2025年NIST论文和现行IEEE测量规范作为证据。"
          ] },
          { type: "sources", items: [
            { label: "arXiv原文：Neural Network-Enabled Codebook Design for Phased Array Calibration with Arbitrary Array Sizes（2026-06-15）", url: "https://arxiv.org/abs/2606.16132" },
            { label: "NIST论文页：Two-Tier Vector-Network-Analyzer Calibrations for Uncertainties in Laboratory-Based Over-the-Air and Channel Measurements（2025-10-23）", url: "https://www.nist.gov/publications/two-tier-vector-network-analyzer-calibrations-uncertainties-laboratory-based-over-air" },
            { label: "IEEE官方：IEEE 149-2021天线测量推荐规范", url: "https://standards.ieee.org/ieee/149/6667/" }
          ] }
        ],
        tags: ["测量不确定度", "幅相校准", "模态泄漏", "鲁棒SINR"]
      },
      {
        label: "核心理论",
        title: "误差怎样从阵元复增益传播到模态谱与零陷",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "text", text: "直观解释：理想阵列依靠多个复数响应精确相加或相消。校准误差会旋转或缩放每个阵元的复数箭头。对主瓣而言，许多小误差通常表现为增益损失和旁瓣抬升；对深零陷而言，原本相消后的剩余量接近零，所以同样大小的误差会占据主导。OAM模态投影也是复数相加，因此错误会把单一模态摊到多个模态槽中。" },
          { type: "heading", text: "条件与变量：把真实响应写成理想响应乘以通道误差" },
          { type: "text", text: "设N＝阵元或接收端口数，量纲为1；a∈ℂᴺ＝理想导向向量；gₙ＝第n通道的幅度比例，量纲为1；δφₙ＝第n通道的相位误差，单位rad；δrₙ＝第n阵元的位置误差向量，单位m；k＝2π/λ＝波数，单位rad/m；λ＝波长，单位m；u＝传播方向单位向量。物理图像是幅度误差改变箭头长度，相位与位置误差改变箭头方向。" },
          { type: "formula", text: "ãₙ=gₙ·aₙ·exp[j(δφₙ+k·u·δrₙ)]" },
          { type: "text", text: "对小误差可用exp(jε)≈1+jε做一阶近似。若δgₙ＝gₙ−1，则阵列响应误差δaₙ主要由幅度项δgₙ和总相位项δφₙ+k·u·δrₙ组成。这个近似适合解释误差传播，不适合替代大误差下的完整复指数计算。" },
          { type: "formula", text: "δaₙ≈aₙ[δgₙ+j(δφₙ+k·u·δrₙ)]" },
          { type: "heading", text: "公式：从端口误差到OAM模态泄漏" },
          { type: "text", text: "令F＝单位化的Discrete Fourier Transform（DFT，离散傅里叶变换）模态矩阵；x＝理想端口复响应；D＝diag(gₙexp(jδφₙ))＝通道误差矩阵；b＝FᴴDx＝测得的模态系数向量。上标H表示共轭转置。若D不是单位矩阵，它通常不能与F保持理想正交关系，于是目标模态外出现泄漏。" },
          { type: "formula", text: "b=FᴴDx；ηℓ=|bℓ|²/Σₘ|bₘ|²；Lleak=10log₁₀[(Σₘ≠ℓ|bₘ|²)/|bℓ|²]" },
          { type: "text", text: "ηℓ＝目标模态纯度，量纲为1；Lleak＝相对模态泄漏，单位dB。ηℓ越高、Lleak越负，目标模态越集中。但它们只描述接收孔径上的模态分布，不能单独等同于低Bit Error Rate（BER，误码率）。" },
          { type: "heading", text: "公式：为什么零陷需要误差统计" },
          { type: "text", text: "设w＝接收权值向量；aJ＝干扰导向向量；理想设计满足wᴴaJ＝0。实际残余干扰复幅度近似为wᴴδaJ，功率与其模平方成正比。若只知道每通道误差上限，可做最坏情形扫描；若有重复校准数据，可估计误差分布并做Monte Carlo（蒙特卡洛）随机抽样。" },
          { type: "formula", text: "PJ,res∝|wᴴδaJ|²；SINRout=Ps|wᴴas|²/[PJ|wᴴãJ|²+wᴴRnw]" },
          { type: "text", text: "Ps与PJ分别是目标和干扰输入功率，单位W；as与ãJ分别是目标和实际干扰响应；Rn＝噪声协方差矩阵，单位W。与课题的关系是：OAM模态选择和自适应波束形成都依赖同一组复响应，误差应在同一个端口域进入模型，再观察模态纯度、零陷、输出SINR和BER怎样共同变化。" }
        ],
        tags: ["复增益误差", "位置误差", "模态泄漏", "零陷填充"]
      },
      {
        label: "课题连接",
        title: "把校准有效性、OAM物理结论和抗干扰主张分层验证",
        tone: "accent",
        blocks: [
          { type: "heading", text: "合理结论" },
          { type: "list", items: [
            "幅相误差会破坏均匀圆阵的循环对称性，因此理想DFT模态不再完全解耦。用实测逐端口复响应构造模态耦合矩阵，可以量化目标模态向邻模态的泄漏。",
            "校准矩阵的条件数越大，测量噪声在求逆时越容易被放大。增加测量次数、改进码本正交性或采用正则化可降低方差，但会增加时间、计算或偏差。",
            "同一组误差样本应同时送入固定OAM模态接收、截断模态接收和全端口自适应接收。这样才能判断差异来自算法结构，而不是三种方法使用了不同的误差假设。"
          ] },
          { type: "heading", text: "适用条件" },
          { type: "text", text: "一阶误差模型要求幅度和相位偏差较小，阵列在校准与测试之间近似线性且时不变。若功率放大器进入非线性区、移相器误差随状态变化、温度显著漂移或互耦随终端阻抗改变，应使用按频率、功率、波束状态和时间索引的实测误差，而不是一个固定复增益。" },
          { type: "formula", text: "Hmeas(f,t,T,q)=Htrue(f)⊙G(f,t,T,q)+E(f,t,T,q)" },
          { type: "text", text: "f＝频率，单位Hz；t＝时间，单位s；T＝温度，单位K或℃；q＝移相与衰减器状态；⊙表示逐元素相乘；E＝未被乘性模型解释的残差。直观上，误差不是一个永久贴在阵元上的常数，而可能随工作状态移动。" },
          { type: "heading", text: "仍有争议或待验证" },
          { type: "list", items: [
            "“OAM天然抗干扰”不是由模态正交性自动推出。偏轴接收、有限孔径、多径和幅相误差都会引入跨模态耦合，必须在相同孔径、射频通道数和输入Jam-to-Signal ratio（J/S，干信比）下比较输出SINR与BER。",
            "一次暗室校准不能证明长期鲁棒性。应测量校准后随时间、温度和重新上电的漂移，并给出95%区间或最坏值。",
            "把所有误差都假设成独立同分布高斯变量可能低估风险。馈电网络、时钟或机械安装会制造通道间相关误差；相关结构应由重复测量估计，或以保守场景单独扫描。"
          ] },
          { type: "text", text: "本期只讨论接收端、防御性和学术性抗干扰评估，不提供对他人通信实施干扰的设备参数或部署指导。" }
        ],
        tags: ["证据分层", "时变误差", "公平对比", "相关误差"]
      },
      {
        label: "行业需求",
        title: "近7日热点不足：工程验收正在把“校准过”改写为可量化不确定度",
        layout: "wide",
        priority: "证据分级",
        blocks: [
          { type: "text", text: "截至2026年8月10日，近7日未发现足够可靠、可由一手来源核验，且直接关联OAM阵列测量、相控阵校准或高可靠抗干扰通信的新动态。以下使用发布日期更早的标准组织、国家计量机构和原始论文资料，不称为本周热点。" },
          { type: "heading", text: "A｜天线测量需要设施、仪器与测距共同受控（强证据：IEEE现行标准）" },
          { type: "text", text: "IEEE 149-2021《IEEE Recommended Practice for Antenna Measurements》（IEEE天线测量推荐规范）覆盖天线发射与接收特性、方向图测量、测试场设计、仪器要求和场地评估。对阵列研发的翻译是：增益、扫描范围和旁瓣不能脱离测试距离、静区、极化对准、动态范围与不确定度说明。" },
          { type: "heading", text: "B｜OTA链路的电缆与校准参考面会改变不确定度（强证据：NIST同行评审论文，2025-10-23）" },
          { type: "text", text: "National Institute of Standards and Technology（NIST，美国国家标准与技术研究院）研究了实验室Over-the-Air（OTA，空中接口）和信道测量中的两级Vector Network Analyzer（VNA，矢量网络分析仪）校准，量化长电缆与不同校准位置之间的便利性—不确定度权衡。工程需求因此应写成：给出校准参考面、线缆稳定性、复数S参数重复性，以及功率时延谱和到达角结果的合成不确定度。" },
          { type: "heading", text: "C｜校准效率与可靠性可由测量次数和条件数表达（中等证据：预印本加26 GHz实测，2026-06-15）" },
          { type: "text", text: "Chen等人的预印本把M＝校准测量次数、N＝有效阵元数和κ(A)＝码本矩阵条件数放进同一设计问题。对86阵元实验，低条件数码本以M＝86完成校准；论文报告它与M＝90参考法的平均绝对相位和幅度差分别为2.42°与0.42 dB。证据支持特定测试平台上的校准效率，不应外推为所有阵列和环境的普遍优势。" },
          { type: "heading", text: "把笼统岗位或技术需求翻译为可测指标" },
          { type: "list", items: [
            "相控阵与基站天线：带宽，单位Hz；实现增益，单位dBi；扫描范围，单位°；扫描损耗与旁瓣电平，单位dB；Active Voltage Standing Wave Ratio（Active VSWR，有源电压驻波比），量纲为1；幅相校准残差、校准耗时、温漂和单通道功耗。",
            "OAM与结构化电磁场：目标模态纯度，单位%；跨模态串扰，单位dB；接收孔径捕获效率，单位%；偏轴，单位m；倾角，单位°；重复装调后的模态谱置信区间。",
            "高可靠抗干扰接收：输入J/S与输出SINR，单位dB；BER；零陷深度，单位dB；目标增益损失，单位dB；Channel State Information（CSI，信道状态信息）更新周期，单位s；在幅相、位置和协方差估计误差下的10%分位数。",
            "测试与成本：静区幅相起伏、校准参考面、仪器动态范围、重复次数、测量总时长、数据文件大小、暗室与转台工时、计算量、峰值功耗和校准有效期。每个结果注明解析、全波仿真、暗室实测或外场实测。"
          ] },
          { type: "sources", items: [
            { label: "IEEE官方标准页：IEEE 149-2021", url: "https://standards.ieee.org/ieee/149/6667/" },
            { label: "NIST原始论文页：两级VNA校准与OTA测量不确定度", url: "https://www.nist.gov/publications/two-tier-vector-network-analyzer-calibrations-uncertainties-laboratory-based-over-air" },
            { label: "arXiv原文：任意阵元数相控阵校准码本设计", url: "https://arxiv.org/abs/2606.16132" }
          ] }
        ],
        tags: ["近7日无可靠热点", "IEEE 149", "OTA不确定度", "验收指标"]
      },
      {
        label: "CST × MATLAB",
        title: "小任务：为OAM接收阵列建立幅相误差蒙特卡洛包络",
        tone: "accent",
        blocks: [
          { type: "heading", text: "目标与输入" },
          { type: "text", text: "沿用昨天从CST导出的N端口目标响应hs和干扰响应hJ。两者都是同一频率、参考面和端口顺序下的复数列向量。今天不重跑大规模全波参数扫描，而是在MATLAB中建立可重复的误差层，回答“校准残差达到什么水平时，模态纯度和零陷开始失效”。" },
          { type: "heading", text: "MATLAB最小可执行步骤" },
          { type: "list", items: [
            "设置随机种子rng(10)。选取幅度误差标准差σA＝0.25 dB、相位误差标准差σφ＝2°作为演示起点；它们不是设备事实，最终应替换为重复校准得到的实测统计量。",
            "生成K＝1000组独立误差：eA=10.^((σA*randn(N,K))/20)，eP=exp(1j*deg2rad(σφ)*randn(N,K))。令每组目标与干扰响应都乘以同一通道误差eA.*eP，以模拟接收链校准残差。",
            "使用零误差模型设计一次固定接收权值w，再把它施加到1000组扰动响应。逐组计算目标增益、干扰残余、输出SINR、OAM模态纯度和零陷深度。不要在每组扰动后重新优化w，否则会把未知误差当成已知信息。",
            "分别把σφ扫为0°、1°、2°、5°，把σA扫为0、0.1、0.25、0.5 dB。每个网格点报告中位数、10%分位数和最坏值，画出输出SINR的误差包络。",
            "增加一个相关误差场景：所有通道共享1°公共相位漂移，并叠加独立残差。公共相位通常不改变单波束功率，却可能影响与另一独立参考链的相干合成；用这个对照检查误差模型是否符合物理。"
          ] },
          { type: "formula", text: "G=eA⊙eP；h̃s=G⊙hs；h̃J=G⊙hJ；Dnull=20log₁₀(|wᴴhJ|/|wᴴh̃J|)" },
          { type: "text", text: "σA＝通道幅度误差标准差，单位dB；σφ＝相位误差标准差，单位°；K＝蒙特卡洛次数，量纲为1；Dnull＝误差引起的零陷变化，单位dB。通过标准不是得到某个预设漂亮数字，而是代码可复现、零误差点回到基线、误差增加时性能趋势合理，并明确区分演示参数与实测参数。" },
          { type: "heading", text: "下一步与CST闭环" },
          { type: "text", text: "若MATLAB扫描发现相位误差是主导项，再在CST中只选3至5个代表性误差状态，用端口相位偏置或实际馈电网络模型重算，检查乘性误差近似是否仍成立。保存随机种子、原始复响应、权值、误差表和分位数结果，避免只保存图片。" },
          { type: "sources", items: [
            { label: "MathWorks官方：rng控制随机数流以实现可复现", url: "https://www.mathworks.com/help/matlab/ref/rng.html" },
            { label: "MathWorks官方：prctile计算样本百分位数", url: "https://www.mathworks.com/help/matlab/ref/prctile.html" },
            { label: "NIST：Channel Sounder Measurement Verification and Uncertainty", url: "https://www.nist.gov/publications/channel-sounder-measurement-verification-and-uncertainty" }
          ] }
        ],
        tags: ["蒙特卡洛", "幅相残差", "误差包络", "可复现随机种子"]
      },
      {
        label: "论文精读",
        title: "精读：用低条件数码本减少相控阵校准的噪声放大",
        layout: "wide",
        blocks: [
          { type: "heading", text: "论文与研究问题" },
          { type: "text", text: "Chen、Sun等人的《Neural Network-Enabled Codebook Design for Phased Array Calibration with Arbitrary Array Sizes》于2026年6月15日提交至arXiv。研究问题是：在所有阵元同时开启的OTA校准中，怎样为任意阵元数和有限相位量化位数生成低条件数码本，并把测量次数压到理论最小值M＝N。直观上，码本规定每次测量时各阵元怎样换相；好的码本让不同阵元的贡献容易分离。" },
          { type: "heading", text: "方法与公式" },
          { type: "text", text: "设A∈ℂᴹˣᴺ＝校准码本矩阵；x∈ℂᴺ＝未知阵元复校准系数；y∈ℂᴹ＝测量向量；n∈ℂᴹ＝测量噪声。模型为y＝Ax+n。当M＝N且A可逆时，x̂＝A⁻¹y；A的条件数κ(A)越大，噪声越可能在求逆时被放大。" },
          { type: "formula", text: "y=Ax+n；x̂−x=A⁻¹n；‖δx‖₂/‖x‖₂≤κ(A)·‖δy‖₂/‖y‖₂" },
          { type: "text", text: "作者用共享神经网络根据矩阵行列坐标、阵元数N和相位量化位数生成初始相位，再通过量化、随机重启和局部优化降低条件数。训练损失同时惩罚逆矩阵范数和偏离正交矩阵的程度。神经网络在这里是离线码本生成器；部署时存储预计算码本，不需要实时推理。" },
          { type: "heading", text: "结果与证据强度" },
          { type: "list", items: [
            "数值结果覆盖N＝2至256、4至6 bit相位量化。论文报告所生成码本的平均条件数分别为1.41、1.17和1.08；量化位数越高，越接近理想值1。",
            "实测在26 GHz Compact Antenna Test Range（CATR，紧缩场天线测试场）进行，设备为16×16 Antenna-in-Package（AiP，封装天线）阵列，选取中央86个有效阵元。静区为75 cm×75 cm，论文给出的幅相起伏为±0.4 dB与±4°。",
            "对N＝86，参考码本在M＝86时条件数为21.12，扩展到M＝90后为3.52；所提6 bit码本在M＝86时为1.08。所提方法与M＝90参考法的校准结果平均绝对差为2.42°和0.42 dB，并得到接近的水平、垂直扫描方向图。"
          ] },
          { type: "heading", text: "局限与可复现价值" },
          { type: "text", text: "这是五页预印本，实验集中于一套26 GHz AiP平台和一个86阵元子阵；文中没有给出跨温度、跨频带、长期漂移、OAM模态或抗干扰BER结果。论文把码本性能主要归因于阵元数和相位量化，但真实系统还可能存在状态相关幅相误差与非线性。对本课题最可复现的部分不是神经网络本身，而是先构造不同条件数的矩阵A，向y加入已知复噪声，验证κ(A)与校准误差分布、模态泄漏和零陷退化之间的关系。" },
          { type: "sources", items: [
            { label: "arXiv摘要、全文与提交记录：arXiv:2606.16132", url: "https://arxiv.org/abs/2606.16132" },
            { label: "arXiv PDF原文：Neural Network-Enabled Codebook Design for Phased Array Calibration with Arbitrary Array Sizes", url: "https://arxiv.org/pdf/2606.16132" }
          ] }
        ],
        tags: ["OTA校准", "码本条件数", "26 GHz实测", "噪声放大"]
      },
      {
        label: "术语与思考题",
        title: "把测量误差语言翻译为可复现的系统指标",
        layout: "wide",
        blocks: [
          { type: "list", items: [
            "Over-the-Air（OTA，空中接口）：不直接连接每个射频端口，而通过辐射链路测量整机；本期用于描述封装相控阵的校准方式。",
            "Vector Network Analyzer（VNA，矢量网络分析仪）：测量散射参数幅度和相位的仪器；本期获取每个校准码本状态的复数传输系数。",
            "Compact Antenna Test Range（CATR，紧缩场天线测试场）：用反射面在有限距离形成近似平面波静区；本期为26 GHz阵列提供受控实测环境。",
            "Uncertainty budget（不确定度预算）：列出各误差来源、分布、灵敏度与合成贡献的量化表；本期用于把“测得多少”与“可信到什么范围”同时报告。",
            "Condition number（κ，条件数）：衡量线性求逆对扰动敏感程度的无量纲指标；本期解释校准码本怎样放大测量噪声。",
            "Monte Carlo method（蒙特卡洛方法）：按指定概率模型反复随机抽样并统计输出分布；本期生成幅相误差下的SINR、模态纯度与零陷包络。",
            "Orbital Angular Momentum（OAM，轨道角动量）：以exp(jℓφ)方位相位结构表征的波场属性；本期观察校准误差导致的跨模态泄漏。",
            "Signal-to-Interference-plus-Noise Ratio（SINR，信干噪比）：目标输出功率与干扰加噪声输出功率之比，通常以dB表示；本期作为抗干扰接收的主要系统指标。"
          ] },
          { type: "heading", text: "研究生层次思考题" },
          { type: "text", text: "一个16端口OAM接收圆阵在零误差模型下可对单个干扰形成−60 dB零陷。重复校准显示：每通道独立相位残差标准差为2°，另有全部通道共享的3°公共相位漂移；幅度误差可忽略。请先判断公共相位与独立相位误差分别会怎样影响单波束功率、OAM模态纯度和相对另一参考链的相干合成。再设计一个不少于1000次的蒙特卡洛实验，规定哪些量在每次试验中固定、哪些随机，报告输出SINR的中位数与10%分位数。最后说明为什么用零误差模型为每个随机样本重新计算最优权值，会高估实际系统的鲁棒性。" }
        ],
        tags: ["8个术语", "公共相位", "误差统计", "鲁棒性思考题"]
      }
    ]
  },
  {
    issue: 9,
    date: "2026-08-09",
    dateLabel: "2026年8月9日 · ISSUE 09",
    updatedAt: "2026-08-09 15:56",
    title: "CST × MATLAB联合验证：让端口、坐标与相位约定闭环",
    summary: "围绕CST全波模型与MATLAB信号处理之间的数据链，解释怎样统一端口顺序、复数相位、坐标系、功率归一化和模态投影，并用能量守恒、往返重构误差与解析基线发现静默错误。近7日未发现足够可靠的新动态，本期以权威工具文档和可复现近场建模论文推进方法主线。",
    readingMinutes: 23,
    modules: [
      {
        label: "今日结论",
        title: "联合验证的第一成果不是漂亮曲线，而是一条能自证正确的数据链",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "list", items: [
            "CST Studio Suite（CST，三维全波电磁仿真软件）与MATLAB联合验证的核心，是让同一个物理量在两个软件中保持同一端口顺序、坐标系、单位和相位符号。直观上，这像把两把尺子的零点和刻度先对齐，再比较测量结果。",
            "复电场或端口电压必须保留实部与虚部，不能只导出幅度。相位决定Orbital Angular Momentum（OAM，轨道角动量）模态之间是相加还是相消；丢掉相位后，模态谱和零陷结果都不可恢复。",
            "Discrete Fourier Transform（DFT，离散傅里叶变换）可以把均匀圆阵端口数据投影到OAM模态域，但指数正负号、阵元方位角起点和顺逆时针编号会共同决定拓扑荷ℓ的正负。最可靠的检查是先用人工构造的单模态向量做往返重构。",
            "联合验证至少需要三类闭环：数据闭环检查导入导出，物理闭环检查功率与对称性，算法闭环比较端口域和完整模态域结果。任一闭环失败时，不应继续解释Signal-to-Interference-plus-Noise Ratio（SINR，信干噪比）或Bit Error Rate（BER，误码率）。",
            "截至北京时间2026年8月9日，近7日未发现足够可靠、且直接关联CST/MATLAB、OAM阵列或抗干扰验证的新动态。本期不制造热点，改用2026年2月12日ETH Zürich实验室原始发布、对应预印本与官方软件文档作为方法证据。"
          ] },
          { type: "sources", items: [
            { label: "ETH Zürich实验室原始发布：Physically Consistent Evaluation of Commonly Used Near-Field Models（2026-02-12）", url: "https://iip.ethz.ch/news-and-events/iip-news/2026/02/preprint-of-our-new-paper-on-physically-consistent-evaluation-of-commonly-used-near-field-models-now-available-on-arxiv.html" },
            { label: "arXiv原文：Physically Consistent Evaluation of Commonly Used Near-Field Models", url: "https://arxiv.org/abs/2602.10976" }
          ] }
        ],
        tags: ["数据闭环", "相位约定", "OAM模态投影", "可复现验证"]
      },
      {
        label: "核心理论",
        title: "从N个端口复数样本到可逆的OAM模态谱",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "text", text: "直观解释：把N个圆周端口想成N只同时记录幅度和相位的传感器。OAM模态投影不是创造新信息，而是询问这些端口样本与每一种螺旋相位模板有多相似。若模板与端口编号约定一致，一个纯ℓ模态应集中到一个谱线；若约定相反，谱线会镜像到−ℓ。" },
          { type: "heading", text: "条件与变量：先固定几何、单位和符号" },
          { type: "text", text: "设N＝均匀圆阵端口数，量纲为1；n＝端口索引，取0至N−1；φₙ＝第n个端口的方位角，单位rad；xₙ＝同一参考面上的复端口电压或复场样本，其单位由导出量决定，可为V或V/m；ℓ＝拓扑荷，量纲为1；j＝虚数单位。物理图像是exp(jℓφₙ)给每个端口贴上一张理想螺旋相位标签。" },
          { type: "formula", text: "φₙ=φ₀+s·2πn/N；s=+1表示按约定方向递增，s=−1表示反向编号" },
          { type: "text", text: "采用下式定义模态系数aℓ。负指数表示用共轭模板做内积；若CST中的方位角方向或时间因子约定与此相反，ℓ的符号会翻转，但总能量不应改变。不要靠记忆判断正负，应以人工单模态测试锁定约定。" },
          { type: "formula", text: "aℓ=(1/√N)Σₙ₌₀ᴺ⁻¹ xₙ exp(−jℓφₙ)" },
          { type: "heading", text: "公式：模态纯度与往返重构" },
          { type: "text", text: "Pℓ＝第ℓ模态的功率代理，单位随|xₙ|²而定；ηℓ＝模态纯度，量纲为1，通常以百分比报告。若使用完整的N个正交模态，DFT矩阵F是酉矩阵，端口域能量与模态域能量相等。直观上，完整模态变换只是旋转坐标轴，不会改变信号总长度。" },
          { type: "formula", text: "Pℓ=|aℓ|²；ηℓ=Pℓ/ΣₘPₘ；a=Fᴴx；x̂=Fa；‖x‖₂²=‖a‖₂²" },
          { type: "text", text: "若只保留集合S中的少数模态，重构误差εrec会包含被截断的真实能量、噪声和坐标失配。εrec＝相对重构误差，量纲为1；它越小，说明所选模态子空间越能解释端口数据，但这不等于通信性能一定更好。" },
          { type: "formula", text: "εrec=‖x−FₛFₛᴴx‖₂/‖x‖₂" },
          { type: "heading", text: "与课题的关系" },
          { type: "text", text: "在OAM抗干扰课题中，目标信号、跨模态泄漏和外部干扰最终都以端口复响应进入接收器。先证明F的构造、CST数据与MATLAB数据满足能量守恒和往返重构，之后再比较固定模态选择、模态域自适应接收与全端口接收，才可能把算法差异与数据约定错误区分开。" },
          { type: "sources", items: [
            { label: "MathWorks官方文档：fft——离散傅里叶变换", url: "https://www.mathworks.com/help/matlab/ref/fft.html" },
            { label: "MathWorks官方文档：readmatrix——从文本或表格文件读取矩阵", url: "https://www.mathworks.com/help/matlab/ref/readmatrix.html" }
          ] }
        ],
        tags: ["DFT", "拓扑荷ℓ", "模态纯度", "重构误差"]
      },
      {
        label: "课题连接",
        title: "把可证明的坐标等价、适用条件和待验证主张分开",
        tone: "accent",
        blocks: [
          { type: "heading", text: "合理结论" },
          { type: "list", items: [
            "完整酉DFT变换下，端口域与模态域保存相同信息；若使用相同信道、约束和数值精度，最优线性接收器可达到相同输出SINR。差异通常来自模态截断、正则化、先验约束或实现误差。",
            "CST逐端口嵌入方向图包含阵元位置、单元方向图、互耦和平台散射的综合响应。用这些响应合成OAM波束，比只用理想阵列因子更接近真实硬件。",
            "能量守恒、共轭对称性和往返重构是发现端口乱序、度与弧度混用、dB与线性量混用以及相位符号翻转的低成本检查。"
          ] },
          { type: "heading", text: "适用条件" },
          { type: "text", text: "上述DFT关系要求端口沿方位角均匀采样，并且每一列数据对应同一频点、极化分量、参考阻抗和相位参考。若阵元不等间距、接收圆偏轴或只采样局部孔径，应使用实际角度构造非均匀模态矩阵，并检查其条件数；此时简单FFT不再自动正交。" },
          { type: "formula", text: "Gₙℓ=exp(jℓφₙ)/√N；κ(G)=σmax(G)/σmin(G)" },
          { type: "text", text: "κ(G)＝模态矩阵条件数，量纲为1；σmax与σmin分别是最大和最小奇异值。κ越大，测量噪声和幅相误差越容易被模态反演放大。" },
          { type: "heading", text: "仍有争议或待验证" },
          { type: "list", items: [
            "模态纯度高不能单独证明抗干扰优势。还需在相同物理孔径、射频通道、输入Jam-to-Signal ratio（J/S，干信比）和Channel State Information（CSI，信道状态信息）质量下报告输出SINR与BER。",
            "仿真中的深零陷不能直接外推到硬件。连接器、馈线、温漂、量化、互耦模型误差和接收几何偏移都可能填平零陷，应报告误差扫描后的分位数或最坏值。",
            "全波求解器与简化传播模型吻合，只能说明所测场景内的近似有效；频率、距离、障碍物或极化改变后，需要重新验证误差边界。"
          ] },
          { type: "text", text: "本期只讨论接收端、防御性和学术性验证，不提供对外发射干扰的设备参数或部署方法。" }
        ],
        tags: ["酉等价", "嵌入方向图", "条件数", "证据边界"]
      },
      {
        label: "行业需求",
        title: "近7日热点不足：工程需求转向可追溯模型与误差预算",
        layout: "wide",
        priority: "证据分级",
        blocks: [
          { type: "text", text: "截至2026年8月9日，近7日未发现足够可靠、可由一手来源核验，且直接关联OAM阵列、CST/MATLAB联合验证或高可靠抗干扰通信的新动态。以下采用发布日期更早的权威与原始资料，不称为本周热点。" },
          { type: "heading", text: "A｜全波模型与通信模型必须可追溯（中等证据：大学实验室原始发布与预印本，2026-02-12）" },
          { type: "text", text: "ETH Zürich团队使用Ansys High Frequency Structure Simulator（HFSS，高频结构仿真器）提取离散空间坐标上的全波近场模型，再评估常用近场近似。实验室原始发布指出，常见模型足以完成基础聚焦，却可能错误预测旁瓣和Reconfigurable Intelligent Surface（RIS，可重构智能表面）的频率相关行为，原因之一是忽略镜面反射。对阵列岗位和课题的翻译是：不仅交付峰值增益，还要交付数据来源、网格/边界设置、坐标定义、旁瓣误差和跨频误差。" },
          { type: "heading", text: "B｜标准评估关注端到端可测性能（强证据：ITU-R官方评估入口，状态以页面为准）" },
          { type: "text", text: "International Telecommunication Union Radiocommunication Sector（ITU-R，国际电信联盟无线电通信部门）的IMT-2030候选技术流程以技术性能要求、提交模板和评估指南组织证据。OAM或结构化场若进入系统论证，仍要落到覆盖、吞吐、时延、可靠性、频谱效率和能耗等指标；模态名称本身不是性能指标。" },
          { type: "heading", text: "把笼统需求翻译为可测量清单" },
          { type: "list", items: [
            "天线与相控阵：工作带宽，单位Hz；实现增益，单位dBi；扫描范围，单位°；总效率，单位%；Active Voltage Standing Wave Ratio（Active VSWR，有源电压驻波比），量纲为1；扫描损耗、旁瓣电平、移相量化位数、单通道功耗和校准时间。",
            "OAM与结构化场：目标模态纯度，单位%；跨模态串扰，单位dB；有限接收孔径捕获效率，单位%；偏轴、倾斜、频偏和互耦误差下的模态谱与重构误差。",
            "高可靠抗干扰接收：输入J/S，单位dB；输出SINR，单位dB；BER；零陷深度，单位dB；目标增益损失，单位dB；训练快照数、CSI更新周期，单位s；幅相误差扫描后的10%分位数。",
            "工程与成本：射频通道数、仿真网格与内存、一次参数扫描耗时、数据文件大小、算法乘加量、峰值功耗、物料成本和标定工时。证据注明解析、全波仿真、暗室测量、外场测量或标准评估。"
          ] },
          { type: "sources", items: [
            { label: "ETH Zürich实验室：近场模型物理一致性评估与开源代码说明（2026-02-12）", url: "https://iip.ethz.ch/news-and-events/iip-news/2026/02/preprint-of-our-new-paper-on-physically-consistent-evaluation-of-commonly-used-near-field-models-now-available-on-arxiv.html" },
            { label: "ITU-R官方：IMT-2030候选技术提交与评估入口", url: "https://www.itu.int/itu-r/en/itu-r-study-groups/rsg5/rwp5d/imt-2030/pages/submission-eval.aspx" },
            { label: "3GPP官方：TR 38.901信道模型文档记录", url: "https://www.3gpp.org/dynareport/38901.htm" }
          ] }
        ],
        tags: ["近7日无可靠热点", "模型可追溯", "误差预算", "可测指标"]
      },
      {
        label: "CST × MATLAB",
        title: "小任务：导出一圈复场并完成三道闭环检查",
        tone: "accent",
        blocks: [
          { type: "heading", text: "目标与CST导出" },
          { type: "text", text: "在已有均匀圆阵模型中只选一个中心频点f₀，f₀＝验证频率，单位Hz。在接收平面建立半径固定的一圈N个等角度采样点，导出同一极化分量的复电场实部与虚部；或导出N个接收端口的复电压。CSV列固定为index、phi_deg、real、imag，并在文件名记录频率、单位、坐标系和激励端口。" },
          { type: "heading", text: "MATLAB最小可执行步骤" },
          { type: "list", items: [
            "用readmatrix读取CSV，构造x=real+1j*imag。先检查端口索引是否唯一且连续，再把phi_deg乘π/180转换为rad。不要对相位列直接做线性插值。",
            "人工构造x_test(n)=exp(j·2·φₙ)，按本期公式求模态谱。主峰应落在ℓ＝+2；若落在−2，检查指数符号、方位角方向和编号顺序，而不是手动交换结果标签。",
            "对CST数据计算端口能量Σ|xₙ|²和完整模态能量Σ|aℓ|²；相对差应接近浮点舍入误差。然后做完整模态往返重构，报告εrec。",
            "只保留ℓ＝−2至+2重构，比较εrec与目标模态纯度；再把第一个端口循环移动一位，观察谱相位变化而功率谱保持。这个检查可区分方位起点改变与物理模态改变。"
          ] },
          { type: "formula", text: "x=M(:,3)+jM(:,4)；a=Fᴴx；ΔE=|‖x‖₂²−‖a‖₂²|/‖x‖₂²" },
          { type: "heading", text: "通过标准与留档" },
          { type: "text", text: "ΔE＝相对能量差，量纲为1；完整模态εrec和ΔE应接近数值精度。截断模态εrec可以较大，但必须与被删除模态功率一致。保存原始CSV、MATLAB脚本、频率、CST工程版本、端口映射表、单位和相位约定；输出一张模态功率谱和一张重构残差图。若闭环不通过，停止后续LCMV或BER比较。" },
          { type: "sources", items: [
            { label: "MathWorks官方：readmatrix数据导入语法与选项", url: "https://www.mathworks.com/help/matlab/ref/readmatrix.html" },
            { label: "MathWorks官方：angle返回复数相位角", url: "https://www.mathworks.com/help/matlab/ref/angle.html" },
            { label: "Dassault Systèmes官方：CST Studio Suite产品与工作流概览", url: "https://www.3ds.com/products/simulia/cst-studio-suite" }
          ] }
        ],
        tags: ["CSV复数数据", "单模态自测", "Parseval检查", "往返重构"]
      },
      {
        label: "论文精读",
        title: "精读：用全波样本审计常用近场模型，而不是默认近似正确",
        layout: "wide",
        blocks: [
          { type: "heading", text: "论文与研究问题" },
          { type: "text", text: "Schwan、Stutz-Tirri等人的《Physically Consistent Evaluation of Commonly Used Near-Field Models》预印本于2026年2月公开。研究问题是：通信与感知中常用的近场模型，在预测真实电磁场时究竟准确到什么程度；怎样建立一个满足Maxwell's equations（麦克斯韦方程组）的离散参考模型来审计这些近似。直观上，作者不再让简化模型互相评分，而是用全波求解结果建立一把更接近物理的尺子。" },
          { type: "heading", text: "方法" },
          { type: "text", text: "团队从HFSS全波仿真提取预先定义空间坐标上的场响应，把端口激励到采样点场量的关系整理为离散线性模型；随后在三个场景比较常见近场模型：自由空间Uniform Linear Array（ULA，均匀线阵）聚焦、阵列与焦点之间存在障碍物、以及自由空间RIS。核心方法价值不是特定求解器，而是固定采样坐标、使用同一激励与观测量，再逐点比较复场。" },
          { type: "formula", text: "e=Hw；e＝采样点复电场向量，单位V/m；H＝端口到空间采样点的复响应矩阵；w＝端口复激励向量" },
          { type: "heading", text: "结果与证据强度" },
          { type: "list", items: [
            "实验室原始发布总结：常用模型对基础波束聚焦通常足够，但对旁瓣和RIS的频率相关行为预测不准。",
            "发布方指出，RIS模型忽略镜面反射是误差来源之一。这提醒阵列与OAM研究：只拟合目标点峰值，可能掩盖旁瓣、跨模态泄漏和宽带失配。",
            "这是全波仿真驱动的方法研究，不是OAM抗干扰实测。它支持的是模型审计流程，不能直接支持某种模态具有BER或J/S优势。"
          ] },
          { type: "heading", text: "局限与可复现价值" },
          { type: "text", text: "全波参考仍受材料参数、边界条件、网格收敛和端口定义影响，因此“物理一致”不等于“自动等同实测”。对本课题最可复现的部分，是把CST中的逐端口嵌入场组成H，在MATLAB中对任意权值w重构场e，再与CST直接激励同一权值的结果逐点比较。若二者不一致，可按端口映射、共轭约定、归一化、坐标和网格顺序逐层定位。" },
          { type: "sources", items: [
            { label: "arXiv原文与版本记录：Physically Consistent Evaluation of Commonly Used Near-Field Models", url: "https://arxiv.org/abs/2602.10976" },
            { label: "ETH Zürich原始发布：研究场景、主要发现与代码入口（2026-02-12）", url: "https://iip.ethz.ch/news-and-events/iip-news/2026/02/preprint-of-our-new-paper-on-physically-consistent-evaluation-of-commonly-used-near-field-models-now-available-on-arxiv.html" },
            { label: "作者开源仓库：evaluation-of-near-field-models", url: "https://github.com/IIP-Group/evaluation-of-near-field-models" }
          ] }
        ],
        tags: ["全波参考", "近场模型", "旁瓣误差", "可复现审计"]
      },
      {
        label: "术语与思考题",
        title: "把软件接口语言翻译为可检验的电磁量",
        layout: "wide",
        blocks: [
          { type: "list", items: [
            "CST Studio Suite（CST，三维全波电磁仿真软件）：求解天线、阵列和传播结构的电磁响应；本期提供端口复响应或空间复场数据。",
            "MATLAB（Matrix Laboratory，矩阵实验室数值计算环境）：处理矩阵、信号与可视化；本期读取CST数据并完成模态投影和闭环校验。",
            "Discrete Fourier Transform（DFT，离散傅里叶变换）：把等角度端口样本映射到离散方位模态；本期用于构造完整可逆的OAM模态坐标。",
            "Orbital Angular Momentum（OAM，轨道角动量）：具有exp(jℓφ)方位相位结构的波场属性；本期用拓扑荷ℓ标记模态谱。",
            "Embedded Element Pattern（EEP，嵌入阵元方向图）：其他端口按规定终端状态时，单端口激励得到的复方向图；本期用于保留互耦和平台散射后合成阵列场。",
            "Channel State Information（CSI，信道状态信息）：接收器已知或估计的复信道响应；本期说明CST响应怎样成为接收算法的模型输入。",
            "Parseval's theorem（帕塞瓦尔定理）：酉变换前后平方范数相等；本期用它检查端口域与完整模态域能量是否一致。",
            "Condition number（κ，条件数）：衡量矩阵反演对误差敏感程度的无量纲指标；本期用于判断非均匀采样或模态截断会不会放大噪声。"
          ] },
          { type: "heading", text: "研究生层次思考题" },
          { type: "text", text: "一个16端口均匀圆阵在CST中导出目标ℓ＝+1和一个外部干扰的复端口响应。MATLAB中完整DFT满足能量守恒，但目标主峰出现在ℓ＝−1；把端口顺序反转后，主峰回到+1，同时全端口LCMV的输出SINR不变。请解释：哪些变化只是坐标标签变化，哪些量必须保持不变？再设计三项检查，区分时间因子/指数符号错误、端口编号方向错误和真实接收几何镜像。最后说明为什么只看模态功率谱不能完成这一区分。" }
        ],
        tags: ["8个术语", "相位符号", "坐标不变量", "研究生思考题"]
      }
    ]
  },
  {
    issue: 8,
    date: "2026-08-06",
    dateLabel: "2026年8月6日 · ISSUE 08",
    updatedAt: "2026-08-06 10:23",
    title: "波束与模态联合抗干扰：把多个保护目标写进同一组约束",
    summary: "从Linearly Constrained Minimum Variance（LCMV，线性约束最小方差）接收器出发，解释如何同时保持目标OAM模态、抑制若干干扰方向，并用零陷深度、最坏情形输出SINR和BER衡量鲁棒性。结合2026年8月5日公开的近场Airy波束与多普勒感知MIMO资料，区分结构化波束的传播优势、抗干扰能力和仍需实验验证的主张。",
    readingMinutes: 25,
    modules: [
      {
        label: "今日结论",
        title: "联合抗干扰的核心不是换一种波束名称，而是把保护与抑制同时约束",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "list", items: [
            "Linearly Constrained Minimum Variance（LCMV，线性约束最小方差）把多个线性要求同时写入接收权值：例如保持目标Orbital Angular Momentum（OAM，轨道角动量）模态单位增益，并在一个或多个干扰方向形成零响应。直观上，它先钉住不能破坏的信号，再在剩余自由度里降低干扰和噪声。",
            "一个N端口阵列最多提供N维复空间。K个彼此独立的等式约束会消耗K个自由度；约束过多、约束向量接近共线或阵列校准不准时，深零陷会变得脆弱，并可能放大白噪声。",
            "OAM模态标签不能替代空间信道约束。应把期望模态、同模态多径、邻近模态泄漏和外部干扰都投影到同一端口域模型，再比较固定模态滤波、截断模态LCMV和全端口LCMV。",
            "工程结论应至少同时给出Jam-to-Signal ratio（J/S，干信比）、输出Signal-to-Interference-plus-Noise Ratio（SINR，信干噪比）、Bit Error Rate（BER，误码率）、零陷深度、目标增益损失和计算/功耗代价。单独报告理想角度上的零点不足以证明鲁棒抗干扰。",
            "近7日发现两项可核对的新资料：2026年8月5日提交的近场Airy波束遮挡缓解预印本，以及同日提交、含测量结果的近场MIMO多普勒定位预印本。前者说明结构化波束可改变能量路径，后者说明大孔径下运动会带来阵元相关模型失配；二者都不是OAM抗干扰性能的直接证明。"
          ] },
          { type: "sources", items: [
            { label: "arXiv原文：Physics-Guided Neural Airy Beamforming for Near-Field Blockage Mitigation（提交于2026-08-05）", url: "https://arxiv.org/abs/2608.04388" },
            { label: "arXiv原文：Near-Field Velocity Estimation and Doppler-Aware Localization in OFDM Massive MIMO（提交于2026-08-05）", url: "https://arxiv.org/abs/2608.05133" }
          ] }
        ],
        tags: ["LCMV", "多约束零陷", "OAM抗干扰", "鲁棒性"]
      },
      {
        label: "核心理论",
        title: "从单约束MVDR推进到多约束LCMV",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "text", text: "直观解释：昨天的Minimum Variance Distortionless Response（MVDR，最小方差无失真响应）像一名只被要求保护一个方向的调音师。LCMV允许给它一张更完整的清单：目标模态必须保持，校准误差附近的几个样本也要保持，同时对已知干扰方向或干扰模态给出零响应。权值不是逐条独立设计，而是在全部约束下共同寻找最小输出功率解。" },
          { type: "heading", text: "条件与变量：先把端口域、波束域和模态域放进同一记号" },
          { type: "text", text: "设N＝接收端口数，量纲为1；y∈ℂᴺ＝一次窄带复基带接收快照；w∈ℂᴺ＝复接收权值；Rᵢ₊ₙ∈ℂᴺˣᴺ＝干扰加噪声协方差矩阵，单位可取W；C＝[c₁,…,cK]∈ℂᴺˣᴷ＝K个约束响应向量组成的矩阵；f∈ℂᴷ＝每个约束的期望复响应。上标H表示共轭转置。物理图像是每一列cₖ描述一种必须辨认的空间签名，它既可以是到达方向导向向量，也可以是经过真实信道后的OAM模态响应。" },
          { type: "formula", text: "min_w  wᴴRᵢ₊ₙw，约束 Cᴴw=f" },
          { type: "text", text: "若Rᵢ₊ₙ可逆、C的列在Rᵢ₊ₙ⁻¹加权意义下线性独立，则闭式解如下。Rᵢ₊ₙ⁻¹先压低高干扰方向，后面的矩阵因子再把结果校正到全部约束同时满足。K＝1且f＝1时，它退化为上一期的MVDR。" },
          { type: "formula", text: "wLCMV=Rᵢ₊ₙ⁻¹C(CᴴRᵢ₊ₙ⁻¹C)⁻¹f" },
          { type: "heading", text: "怎样写一个OAM联合约束" },
          { type: "text", text: "设h₊₁＝目标ℓ＝+1 OAM模态经过传播、接收孔径和互耦后的端口响应；g₁、g₂＝两个干扰空间响应。ℓ＝拓扑荷，量纲为1，表示绕轴一周的相位变化为2πℓ。最简单的约束可写成C＝[h₊₁,g₁,g₂]、f＝[1,0,0]ᵀ：目标单位通过，两路干扰置零。这里使用的是实际端口响应，而不是理想Discrete Fourier Transform（DFT，离散傅里叶变换）列向量。" },
          { type: "formula", text: "C=[h₊₁,g₁,g₂]；f=[1,0,0]ᵀ；Cᴴw=f" },
          { type: "heading", text: "自由度、白噪声增益与失配" },
          { type: "text", text: "K越接近N，可用于降低剩余干扰的自由度越少。若两列约束几乎平行，矩阵CᴴRᵢ₊ₙ⁻¹C会病态，权值范数可能很大。White Noise Gain（WNG，白噪声增益）常定义为1/(wᴴw)，量纲为1；在目标响应归一化时，WNG越低通常表示接收器越容易放大独立端口噪声和幅相误差。" },
          { type: "formula", text: "WNG=1/(wᴴw)；约束余量 e=Cᴴw−f" },
          { type: "text", text: "零陷深度ND可相对主瓣响应定义。aⱼ＝干扰导向向量；aₛ＝目标导向向量；ND的单位为dB，数值越负表示理想零陷越深。但真正应报告的是角度、频率、阵元误差和信道快照扫描后的最坏值或分位数，而不是单一设计点。" },
          { type: "formula", text: "ND=20log₁₀(|wᴴaⱼ|/|wᴴaₛ|) dB" },
          { type: "heading", text: "与课题的关系" },
          { type: "text", text: "OAM抗干扰可以被表述为结构化约束设计：目标模态提供应保持的子空间，外部干扰与跨模态泄漏提供应抑制的子空间。真正的研究问题不是LCMV公式本身，而是C如何从CST全波端口响应、接收几何和有限快照中可靠获得，以及在模型失配下应保护一个向量、一个角域扇区还是一个模态子空间。" },
          { type: "sources", items: [
            { label: "IEEE DOI：Frost, An Algorithm for Linearly Constrained Adaptive Array Processing（1972）", url: "https://doi.org/10.1109/TAP.1972.1140126" },
            { label: "IEEE DOI：Capon, High-Resolution Frequency-Wavenumber Spectrum Analysis（1969）", url: "https://doi.org/10.1109/PROC.1969.7278" }
          ] }
        ],
        tags: ["LCMV", "约束矩阵C", "WNG", "零陷深度"]
      },
      {
        label: "课题连接",
        title: "把合理结论、适用条件和待验证主张分三层",
        tone: "accent",
        blocks: [
          { type: "heading", text: "合理结论" },
          { type: "list", items: [
            "若期望信号与干扰在N端口观测空间中可分，且约束数小于可用秩，LCMV能够在保持目标响应的同时抑制指定干扰。这是线性代数结论，与是否使用OAM标签无关。",
            "对完整正交DFT模态集合做无损变换，不会凭空增加自由度；但只保留少数物理上合理的OAM模态可以形成降维先验。在快照少而模态泄漏可控时，这种先验可能降低协方差估计方差。",
            "把目标ℓ＝+1附近的ℓ＝0、+1、+2响应共同设为软保护或子空间保护，可降低偏轴造成的目标自消风险；代价是占用更多自由度并可能降低可形成的零陷深度。"
          ] },
          { type: "heading", text: "适用条件" },
          { type: "text", text: "公平实验必须固定物理孔径、端口数、射频通道数、总接收功率标定、训练快照数、Channel State Information（CSI，信道状态信息）质量、频率采样和校准误差。CSI是接收器掌握的复信道响应，像一张随环境变化的空间地图；若用理想CSI设计而用失配信道测试，必须说明误差分布和更新时间。" },
          { type: "heading", text: "仍有争议或待验证" },
          { type: "list", items: [
            "不能从理想OAM模态正交直接推出复杂多径、偏轴或有限孔径下的BER优势。需要把端口域最优接收器、固定OAM滤波器和模态域LCMV放在同一信道与射频预算下比较。",
            "不能把对遮挡的绕行或自愈性质直接称为抗干扰。遮挡改变期望传播路径，主动或环境干扰则进入协方差和约束设计；两者可能共享阵列实现，却是不同验证问题。",
            "深零陷对幅相误差、互耦、宽带波束斜视和干扰角漂移很敏感。若只在单频、单角和完美校准下得到−60 dB零点，这更像数值设计点，不是可部署性能。"
          ] },
          { type: "formula", text: "建议主结果：min_{误差集合} SINRout；辅助结果：BER(J/S)、ND最坏值、WNG、目标增益损失" }
        ],
        tags: ["合理结论", "适用条件", "待验证主张", "公平基线"]
      },
      {
        label: "行业需求",
        title: "把结构化波束、近场感知和高可靠链路翻译为可测指标",
        layout: "wide",
        blocks: [
          { type: "text", text: "截至2026年8月6日，近7日没有发现已经进入标准或商用产品、且能直接证明OAM抗干扰优势的新公告。以下两项近期预印本用于观察研究变量；ITU-R资料用于观察标准评估方向。证据强度按“官方评估框架、含测量论文、纯仿真预印本”依次降低。" },
          { type: "heading", text: "相控阵与结构化近场：从指向角扩展到轨迹和场景几何" },
          { type: "list", items: [
            "中等证据：2026年8月5日的Airy波束预印本在140 GHz、1 GHz带宽、256阵元半波距Uniform Linear Array（ULA，均匀线阵）仿真中，根据接收机和障碍物边缘几何一次预测弯曲轨迹。论文报告4.7K参数模型在360个独立场景上保留数值参考速率的99.70%，而有限扫描需发射23至429个候选波束。应转化为：阻挡比例扫描、接收功率/速率损失、训练波束数、推理时延、阵列幅相量化和模型外几何误差。",
            "较强但间接证据：2026年8月5日的近场Orthogonal Frequency Division Multiplexing（OFDM，正交频分复用）大规模MIMO论文包含测量结果，指出大孔径下阵元相关双基地多普勒会造成定位模型失配；其方法把整体定位误差从0.268 m降至0.064 m。对抗干扰阵列的启示是：移动目标或平台会让约束向量随阵元和时间变化，应测约束更新速率、失配下最坏SINR和跟踪开销，而不能只用静态导向向量。",
            "官方强证据：ITU-R的IMT-2030评估指南草案已纳入近场、空间非平稳和Integrated Sensing and Communication（ISAC，通感一体化）相关扩展信道模型，但草案仍待2026年12月由上级研究组审批。工程需求应落为指定测试环境下的覆盖、频谱效率、时延、可靠性、感知精度、能耗和复杂度，而不是宣称某一种波束必然成为标准方案。"
          ] },
          { type: "heading", text: "面向个人课题的指标清单" },
          { type: "list", items: [
            "天线与射频：工作带宽，单位Hz；实现增益，单位dBi；扫描范围，单位°；总效率，单位%；端口Active Voltage Standing Wave Ratio（Active VSWR，有源电压驻波比），量纲为1；移相/幅控位数；单波束功耗与校准周期。",
            "OAM与结构化场：模态纯度，单位%；目标模态接收功率；跨模态串扰，单位dB；偏轴、倾斜、频偏和孔径截断下的最坏模态泄漏；若使用Airy类波束，再加轨迹误差和遮挡后恢复距离，单位m。",
            "抗干扰链路：输入J/S，单位dB；输出SINR，单位dB；BER；零陷深度，单位dB；干扰角漂移范围，单位°；快照数；权值更新时间，单位s；WNG和目标增益损失。",
            "工程约束：射频通道数、每次推理乘加量、权值存储、峰均功率比、功耗、物料成本与标定工时。证据应注明是解析、仿真、暗室测量、外场测量还是标准要求。"
          ] },
          { type: "sources", items: [
            { label: "arXiv全文：Physics-Guided Neural Airy Beamforming，模型、仿真与局限（2026-08-05）", url: "https://arxiv.org/html/2608.04388v1" },
            { label: "arXiv原文：近场多普勒感知定位，含测量结果（2026-08-05）", url: "https://arxiv.org/abs/2608.05133" },
            { label: "ITU-R官方：IMT-2030评估指南与技术性能要求进展（状态截至2026年）", url: "https://www.itu.int/en/ITU-R/study-groups/rsg5/rwp5d/imt-2030/pages/default.aspx" }
          ] }
        ],
        tags: ["Airy波束", "近场多普勒", "IMT-2030", "可测指标"]
      },
      {
        label: "CST × MATLAB",
        title: "用一次可执行小实验比较固定模态、三模态LCMV与全端口LCMV",
        tone: "accent",
        blocks: [
          { type: "heading", text: "目标与输入" },
          { type: "text", text: "在CST中沿用上一期的N端口均匀圆阵模型。选择一个中心频点f₀，分别导出目标源和两个不同方向干扰源照射时的N端口复接收电压，或用逐端口嵌入方向图在MATLAB中合成这些响应。三列分别记为hₛ、g₁、g₂。所有数据使用同一参考阻抗、端口顺序和复数相位参考。" },
          { type: "heading", text: "MATLAB最小任务" },
          { type: "list", items: [
            "建立20个独立噪声快照和100个干扰加噪声训练快照，构造样本协方差R̂。记录随机种子，使结果可复现。",
            "方法A：只取DFT后的ℓ＝+1模态；方法B：保留ℓ＝0、+1、+2三个模态，在三维子空间内做LCMV；方法C：直接在全部N个端口上做LCMV。三种方法使用相同训练快照和输入J/S。",
            "先在标称模型下设计，再给每个端口加入独立幅度误差±0.5 dB、相位误差±3°，并让一个干扰到达角偏移0°至5°。这些只是学习用起始扫描值，不是部署指导；实验对象是接收算法鲁棒性。",
            "对每种方法画四条曲线：输出SINR对J/S、BER对J/S、最坏零陷深度对角度偏移、WNG对训练快照数。额外记录目标响应|wᴴhₛ|的损失。"
          ] },
          { type: "formula", text: "R̂=(1/L)Σₜ yₜyₜᴴ+δI；δ＝对角加载强度，单位与R̂一致" },
          { type: "heading", text: "通过标准" },
          { type: "text", text: "先检查约束残差‖Cᴴw−f‖₂是否接近数值精度，再解释性能。若全端口LCMV标称最好但误差扫描迅速恶化，而三模态LCMV稍低却更稳定，这支持“结构先验降低估计方差”的条件性结论；若固定ℓ＝+1在偏轴后目标增益明显下降，则说明模态选择器把目标泄漏误当成干扰。不要只保留最好的一次随机结果，应至少报告中位数与10%分位数。" }
        ],
        tags: ["CST端口响应", "MATLAB LCMV", "三基线对照", "误差扫描"]
      },
      {
        label: "论文精读",
        title: "精读：物理引导Airy波束如何绕开遮挡，以及它尚未回答什么",
        layout: "wide",
        blocks: [
          { type: "heading", text: "论文与研究问题" },
          { type: "text", text: "Wang与Dai的预印本《Physics-Guided Neural Airy Beamforming for Near-Field Blockage Mitigation》提交于2026年8月5日。问题是：高频近场Line of Sight（LoS，视距）链路被障碍物部分遮挡时，怎样不做大规模波束扫描，就选择一条接近最优的Airy弯曲能量轨迹。Airy波束是一类主瓣沿弯曲路径传播、有限能量实现可在部分遮挡后重构的结构化场；直观上，它不是把直线波束变强，而是改变主要能量经过空间的位置。" },
          { type: "heading", text: "方法" },
          { type: "text", text: "论文采用单边缘、有限孔径、标量Fresnel衍射模型。Fresnel衍射是近轴条件下描述有限距离波场传播的近似；它保留二次相位，因此能表达近场聚焦和边缘绕射。作者把接收功率写成未遮挡贡献与边缘衍射贡献的共同结果，推导驻点与Karush–Kuhn–Tucker（KKT，带约束最优性条件）候选，得到只占完整候选区约6%的物理紧致区域。随后用Multilayer Perceptron（MLP，多层感知机）把接收机位置、障碍边缘和遮挡比例映射为两个轨迹坐标，再解析生成256阵元权值。" },
          { type: "formula", text: "g=[zᵣ,xᵣ,zₒ,xₑ,s,ρ]ᵀ；(η̂w,β̂)=fϑ(g)" },
          { type: "text", text: "zᵣ、xᵣ＝接收机纵向与横向位置，单位m；zₒ、xₑ＝障碍边缘位置，单位m；s＝未遮挡侧符号，量纲为1；ρ＝孔径遮挡比例，量纲为1；η̂w、β̂＝归一化轨迹坐标，量纲为1。物理图像是先把场景压缩为边缘几何，再让小网络只在物理允许的轨迹附近选点。" },
          { type: "heading", text: "结果" },
          { type: "list", items: [
            "仿真使用140 GHz载频、1 GHz带宽、256阵元半波距ULA和360个独立测试场景。4.7K参数预测器一次发射一个波束，平均速率7.123 Gbit/s；数值参考为7.144 Gbit/s，即保留99.70%。",
            "有限扫描基线需要23、145或429个发射波束，平均速率范围为5.769至6.918 Gbit/s。论文由此支持的是在其模型与场景分布下减少波束训练开销。",
            "与531K参数的纯数据驱动网络相比，4.7K参数模型少约112倍参数，平均速率只低0.019 Gbit/s。该结果说明物理坐标可有效压缩学习问题，但不自动证明真实硬件中的同等差距。"
          ] },
          { type: "heading", text: "局限与可复现价值" },
          { type: "text", text: "作者明确使用单边缘、二维标量Fresnel模型，假设场景几何已知；尚未覆盖多边缘、Uniform Planar Array（UPA，均匀平面阵）、感知误差和硬件约束。论文结果是仿真，不含外部干扰、OAM模态纯度或BER测试，因此不能作为OAM抗干扰证据。最值得复现的是它的评估纪律：同功率比较、独立场景划分、把在线发射波束数作为开销，并用模型外误差检查物理引导表示。可先在CST里用金属屏边缘建立同尺度模型，验证标量Fresnel结果与全波结果在哪些距离和遮挡比例下分离。" },
          { type: "sources", items: [
            { label: "arXiv摘要与提交记录：Wang & Dai（2026-08-05）", url: "https://arxiv.org/abs/2608.04388" },
            { label: "arXiv HTML全文：系统模型、算法、360场景结果与附录参数", url: "https://arxiv.org/html/2608.04388v1" },
            { label: "3GPP官方规范页：TR 38.901信道模型文档记录", url: "https://www.3gpp.org/dynareport/38901.htm" }
          ] }
        ],
        tags: ["Airy beam", "Fresnel衍射", "物理引导学习", "证据边界"]
      },
      {
        label: "术语与思考题",
        title: "把约束、自由度、鲁棒性和结构化传播串起来",
        layout: "wide",
        blocks: [
          { type: "list", items: [
            "Linearly Constrained Minimum Variance（LCMV，线性约束最小方差）：在满足多个线性响应约束时最小化输出功率；本期用它统一目标OAM模态保护与多个干扰零陷。",
            "Orbital Angular Momentum（OAM，轨道角动量）：带有exp(jℓφ)方位相位因子的波场属性；本期把经过真实信道后的OAM响应作为约束向量，而不是天然抗干扰标签。",
            "White Noise Gain（WNG，白噪声增益）：归一化目标响应下常写为1/(wᴴw)；本期用它观察大权值是否放大独立端口噪声与校准误差。",
            "Null Depth（ND，零陷深度）：干扰方向响应相对目标响应的dB值；本期要求报告频率、角度和误差扫描后的最坏值，而非单点零点。",
            "Channel State Information（CSI，信道状态信息）：链路复幅相响应的已知或估计信息；本期它决定LCMV约束向量与协方差是否贴近真实环境。",
            "Line of Sight（LoS，视距）：发射机与接收机之间无遮挡的直接传播路径；本期Airy论文针对LoS被部分遮挡后的能量路径选择。",
            "Fresnel diffraction（菲涅耳衍射）：近轴条件下保留二次相位的有限距离衍射近似；本期用于描述阵列、障碍边缘与接收窗口之间的波场传播。",
            "Karush–Kuhn–Tucker（KKT，带约束最优性条件）：约束优化问题候选最优点需满足的一组条件；本期Airy论文用它缩小轨迹搜索区域。"
          ] },
          { type: "heading", text: "研究生层次思考题" },
          { type: "text", text: "一个16端口均匀圆阵接收ℓ＝+1目标，同时存在两个角度相近的干扰。方案A在全端口域设置目标单位增益和两个零响应；方案B先保留ℓ＝0、+1、+2，再在三模态域设置相同逻辑约束。若接收阵列产生横向偏移，使目标和第一干扰的归一化相关系数从0.2升到0.95，请推导两种方案的可行性与自由度变化，并设计一个包含WNG、最坏输出SINR、目标增益损失和BER的实验，判断何时模态降维降低估计方差，何时它因丢弃有用分量而形成不可恢复的偏差。" }
        ],
        tags: ["8个术语", "LCMV", "Airy", "研究生思考题"]
      }
    ]
  },
  {
    issue: 7,
    date: "2026-08-05",
    dateLabel: "2026年8月5日 · ISSUE 07",
    updatedAt: "2026-08-05 11:49",
    title: "干扰与信道模型：先说明信号怎样进入阵列",
    summary: "从窄带复基带接收模型出发，区分期望信号、干扰、噪声和模型失配，解释干扰协方差如何决定阵列或Orbital Angular Momentum（OAM，轨道角动量）模态接收器能否形成有效零陷。结合近7日公开的FR3超大规模MIMO信道建模与相控阵功放资料，把抽象的“抗干扰”翻译为可复现实验条件和可测指标。",
    readingMinutes: 24,
    modules: [
      {
        label: "今日结论",
        title: "抗干扰结论必须和信道假设一起出现",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "list", items: [
            "窄带阵列模型y=hₛs+Hⱼj+n把接收快照拆成期望信号、干扰和噪声。直观上，阵列看到的不是一串“干扰强度”，而是每个端口上彼此相关的复数幅相样本；能否抑制取决于这些空间响应是否可分。",
            "Jam-to-Signal ratio（J/S，干信比）是接收机输入端干扰功率与期望信号功率之比，通常用dB表示。J/S只说明输入有多难，不能代替输出Signal-to-Interference-plus-Noise Ratio（SINR，信干噪比）、Bit Error Rate（BER，误码率）或期望信号损失。",
            "干扰协方差矩阵记录各阵元干扰的功率与相关性。若干扰与期望信号的阵列响应几乎平行，即使干扰秩很低，也很难在保持期望信号的同时形成深零陷；这属于几何可分性限制，不是换成OAM标签即可消失。",
            "把阵元域乘以Discrete Fourier Transform（DFT，离散傅里叶变换）矩阵得到OAM模态域，只是坐标变换。若接收孔径、对准或传播环境破坏旋转对称性，期望信号和干扰都会跨模态泄漏，固定模态选择器可能同时丢掉期望能量。",
            "近7日有两条可核对的相关预印本：2026年8月4日的6–24 GHz超大规模阵列信道与外场试验综述，以及2026年7月31日的相控阵功放有源驻波比综述。两者均为原始预印本，能提示工程变量，但不等于已形成标准或普适产品结论。"
          ] }
        ],
        tags: ["接收模型", "J/S", "干扰协方差", "OAM模态域"]
      },
      {
        label: "核心理论",
        title: "从一帧阵列数据到可检验的输出SINR",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "text", text: "直观解释：把N个接收端口想成N只同时录音的麦克风。期望信号、外部干扰和接收机噪声都在每个端口留下复数幅相。数字权值w再把N路样本相加；若干扰在空间上与期望信号不同，合成时可以让期望信号同相叠加、干扰相消。" },
          { type: "heading", text: "条件与变量：窄带复基带模型" },
          { type: "text", text: "设N＝接收端口数；y∈ℂᴺ＝一个窄带复基带快照，单位可按V或归一化幅度约定；s∈ℂ＝期望符号；hₛ∈ℂᴺ＝期望信号的端口域信道/导向向量；K＝干扰源数；j∈ℂᴷ＝干扰符号向量；Hⱼ∈ℂᴺˣᴷ＝干扰信道矩阵；n∈ℂᴺ＝接收机噪声。窄带意味着阵列孔径上的传播时延差相对信号带宽足够小，可用相位差近似；宽带时应按频点或时延抽头建模。" },
          { type: "formula", text: "y = hₛs + Hⱼj + n；　z = wᴴy" },
          { type: "text", text: "z∈ℂ＝合成后的标量输出；w∈ℂᴺ＝接收权值；上标H表示共轭转置。若是均匀圆阵，hₛ不应只写成理想平面波相位；昨天得到的嵌入阵元方向图、互耦、极化、有限距离和接收姿态都应进入hₛ或完整传播矩阵。" },
          { type: "heading", text: "用协方差描述干扰的空间形状" },
          { type: "text", text: "Rᵢ＝干扰加噪声协方差矩阵，单位取决于数据标定，常为W或V²；E{·}表示统计期望。矩阵对角元是各端口功率，非对角元表示端口间相关性。直观上，Rᵢ的主特征向量指出干扰能量最常出现的空间方向，而特征值说明各方向有多强。" },
          { type: "formula", text: "Rᵢ = E{(Hⱼj+n)(Hⱼj+n)ᴴ} = HⱼRⱼHⱼᴴ + Rₙ" },
          { type: "text", text: "Rⱼ＝干扰源协方差矩阵；Rₙ＝噪声协方差矩阵。若噪声在各端口独立且等功率，则Rₙ=σₙ²I，其中σₙ²＝单端口噪声功率，单位W；I＝单位矩阵。有限快照下只能用样本协方差R̂ᵢ估计Rᵢ，快照过少、期望信号混入训练数据或环境变化都会造成估计偏差。" },
          { type: "heading", text: "输出指标与几何可分性" },
          { type: "text", text: "设Pₛ＝期望信号平均功率，单位W。输出SINR比较合成后的期望功率与干扰加噪声功率；数值越大通常越利于降低BER，但两者关系还取决于调制、编码和检测器。" },
          { type: "formula", text: "SINRout = Pₛ|wᴴhₛ|² / (wᴴRᵢw)" },
          { type: "text", text: "Minimum Variance Distortionless Response（MVDR，最小方差无失真响应）在约束wᴴhₛ=1下最小化输出干扰加噪声功率。直观上，它把期望方向钉住，再在剩余空间自由度中寻找最安静的组合。" },
          { type: "formula", text: "wMVDR = Rᵢ⁻¹hₛ / (hₛᴴRᵢ⁻¹hₛ)" },
          { type: "text", text: "该闭式解要求Rᵢ可逆且hₛ足够准确。若干扰导向向量hⱼ与hₛ的归一化相关系数ρ=|hₛᴴhⱼ|/(‖hₛ‖₂‖hⱼ‖₂)接近1，则深零陷会同时伤害期望信号。ρ＝0表示两者在当前端口采样下正交；ρ＝1表示完全共线。" },
          { type: "formula", text: "ρ = |hₛᴴhⱼ|/(‖hₛ‖₂‖hⱼ‖₂)，　0≤ρ≤1" },
          { type: "sources", items: [
            { label: "IEEE DOI：Capon, High-Resolution Frequency-Wavenumber Spectrum Analysis（1969）", url: "https://doi.org/10.1109/PROC.1969.7278" },
            { label: "IEEE DOI：Reed, Mallett & Brennan, Rapid Convergence Rate in Adaptive Arrays（1974）", url: "https://doi.org/10.1109/TAES.1974.307893" }
          ] }
        ],
        tags: ["y=hₛs+Hⱼj+n", "Rᵢ", "MVDR", "几何可分性"]
      },
      {
        label: "课题连接",
        title: "把OAM抗干扰写成端口域与模态域的同一个实验",
        tone: "accent",
        blocks: [
          { type: "heading", text: "合理结论" },
          { type: "list", items: [
            "令F∈ℂᴺˣᴺ为归一化DFT矩阵，则模态快照yₘ=Fᴴy、模态信道hₛ,ₘ=Fᴴhₛ、模态协方差Rᵢ,ₘ=FᴴRᵢF。若F是酉矩阵，变换前后总能量和最优线性接收器可达到的输出SINR不凭空改变；模态域的价值是暴露角向结构并便于施加模态约束。",
            "当同轴圆阵、传播和加载近似旋转对称时，OAM模态可能让期望信号与某些干扰呈现较低ρ，固定模态滤波就可能用很低复杂度获得抑制。应把这写成特定几何下的可检验假设，而非“OAM天然抗干扰”。",
            "偏轴、多径、互耦不对称或孔径截断会让FᴴH F出现非对角项。此时模态泄漏既可能来自期望信道，也可能来自干扰信道；需要分别画期望模态功率谱和干扰模态功率谱，不能只给合成后的单个纯度百分比。"
          ] },
          { type: "formula", text: "yₘ=Fᴴy；　Rᵢ,ₘ=FᴴRᵢF；　w=Fwₘ" },
          { type: "heading", text: "适用条件" },
          { type: "text", text: "公平对照应固定物理孔径、阵元/射频通道数、总接收功率、采样率、快照数、校准误差和可用的Channel State Information（CSI，信道状态信息）。CSI是接收机掌握的信道幅相信息；它像一张不断更新的空间地图，假设“完美CSI”通常会高估实际零陷深度。" },
          { type: "heading", text: "仍有争议或待验证" },
          { type: "text", text: "尚不能从“模态正交”直接推出复杂干扰下的BER优势。需要至少扫描J/S、干扰到达角、期望/干扰相关系数ρ、接收横向偏移、频率、快照数和导向矢量误差，并比较固定OAM选择、阵元域MVDR、模态域MVDR以及常规波束赋形。若酉变换且约束信息相同，阵元域与完整模态域MVDR应数值等价；差异通常来自模态截断、正则化或模型先验。" },
          { type: "text", text: "本期只讨论接收端防御性建模与鲁棒性评价，不提供对外发射干扰的设备、功率或部署指导。" }
        ],
        tags: ["模态协方差", "CSI", "公平对照", "接收端防御"]
      },
      {
        label: "行业需求",
        title: "近7日信号：大孔径系统正在逼迫信道与硬件联合建模",
        layout: "wide",
        tone: "industry",
        priority: "证据分级",
        blocks: [
          { type: "heading", text: "A｜FR3超大规模MIMO信道与外场试验（中等证据：原始预印本，2026-08-04）" },
          { type: "text", text: "Miao等于2026年8月4日提交的预印本把Frequency Range 3（FR3，6–24 GHz新中频段）与Extremely Large-Scale Multiple-Input Multiple-Output（XL-MIMO，超大规模多输入多输出）结合起来，综述近场、空间非平稳信道、估计和波束形成，并介绍超过1000阵元的宽带信道探测设备、1536/768阵元算法评估和Upper 6 GHz（U6GHz，6 GHz上部频段）外场试验。摘要明确指出目标Signal-to-Noise Ratio（SNR，信噪比）是其U6GHz系统性能的关键因素。它是预印本，详细场景、基线和外推边界仍需阅读全文核验。" },
          { type: "list", items: [
            "需求翻译：信道模型至少报告频段、带宽、阵列孔径、近远场边界、可见区域、空间相关矩阵、时延/角度扩展、测量动态范围、校准方法和SNR。",
            "与课题的关系：大孔径OAM接收不能默认所有阵元看到相同统计信道；应检查模态协方差是否随阵元位置、频率和距离变化。",
            "证据边界：作者报告包含外场试验，但当前公开版本尚未经过同行评审；不能把特定U6GHz原型结果直接移植到其他频段或OAM系统。"
          ] },
          { type: "heading", text: "B｜相控阵功放要承受随扫描变化的负载（中等证据：综述预印本，2026-07-31）" },
          { type: "text", text: "Chu等于2026年7月31日提交的20页综述说明：密集相控阵中，互耦、封装和互连使每个Power Amplifier（PA，功率放大器）看到的有源负载随频率、扫描角和阵元位置变化。Voltage Standing Wave Ratio（VSWR，电压驻波比）变化会影响输出功率、增益、Power-Added Efficiency（PAE，功率附加效率）、幅相失真与可靠性裕量，进而影响Equivalent Isotropically Radiated Power（EIRP，等效全向辐射功率）、Error Vector Magnitude（EVM，误差矢量幅度）、热密度和校准。" },
          { type: "list", items: [
            "相控阵/基站指标：工作带宽、扫描范围、扫描态有源VSWR、实现增益、旁瓣、EIRP一致性、EVM、每通道PAE、结温和校准开销。",
            "OAM/结构化场指标：每个拓扑荷的有源VSWR、辐射效率、模态串扰矩阵、模态纯度、有效孔径占比和频率稳定性。",
            "防御性抗干扰指标：输入J/S、输出SINR、BER、零陷深度、期望信号增益损失、快照数、收敛时间、导向误差容限、总功耗和成本。"
          ] },
          { type: "heading", text: "C｜权威背景：IMT-2030评估框架仍在形成" },
          { type: "text", text: "International Telecommunication Union Radiocommunication Sector（ITU-R，国际电信联盟无线电通信部门）官方页面显示，Working Party 5D（WP 5D，第5D工作组）已在2026年6月完成IMT-2030无线接口评估指南草案，纳入近场和空间非平稳信道模型；草案已送交Study Group 5（SG 5，第5研究组），计划于2026年12月审议。因此当前应称“草案已完成”，不能称正式标准。" },
          { type: "sources", items: [
            { label: "arXiv原文：FR3 XL-MIMO信道建模、算法评估与外场试验（提交于2026-08-04）", url: "https://arxiv.org/abs/2608.03783" },
            { label: "arXiv原文：大规模相控阵VSWR鲁棒功放综述（提交于2026-07-31）", url: "https://arxiv.org/abs/2608.00351" },
            { label: "ITU-R官方：IMT-2030评估指南草案进展（状态截至2026年）", url: "https://www.itu.int/en/ITU-R/study-groups/rsg5/rwp5d/imt-2030/pages/default.aspx" }
          ] }
        ],
        tags: ["FR3", "XL-MIMO", "有源VSWR", "指标闭环"]
      },
      {
        label: "CST × MATLAB",
        title: "最小任务：验证端口域与完整模态域MVDR等价",
        blocks: [
          { type: "text", text: "目标是在60—90分钟内建立今天理论的数值基线。先用理想8阵元均匀圆阵完成MATLAB验证；若已有昨天的CST嵌入方向图，再替换理想导向向量。" },
          { type: "list", items: [
            "MATLAB：设N=8、阵列半径a=0.6λ。期望信号从方位角20°到达，单个防御性测试干扰从80°到达；设输入J/S依次为−10、0、10、20 dB，白噪声SNR固定为20 dB。首次实验只研究接收算法，不生成任何对外发射信号。",
            "为每个J/S生成K=2000个复高斯快照。用不含期望信号的训练快照估计R̂ᵢ，并加对角加载R̃ᵢ=R̂ᵢ+δ·tr(R̂ᵢ)I/N；先取δ=10⁻³。",
            "分别计算阵元域MVDR和完整DFT模态域MVDR。将模态域权值变回端口域，比较两者的权值、方向图和输出SINR；数值误差应接近浮点精度。",
            "再只保留ℓ∈{−1,0,+1}三个模态，观察模态截断怎样改变期望增益、零陷深度和输出SINR。此时差异来自降维约束，不应归因于OAM创造了额外自由度。",
            "CST可选：从昨天的逐端口嵌入方向图中，在期望与干扰方向抽取同一极化的复场值，分别组成hₛ与hⱼ；保证频率、坐标、端口参考阻抗和相位基准一致后重复上述计算。"
          ] },
          { type: "formula", text: "Δw = ‖w端口 − Fw模态‖₂/‖w端口‖₂；　Gnull = 10log₁₀(|wᴴhₛ|²/|wᴴhⱼ|²) dB" },
          { type: "text", text: "Δw＝两种实现的相对权值误差，量纲为1；Gnull＝期望响应相对干扰响应的空间抑制度，单位dB。验收表至少记录J/S、δ、快照数、ρ、输出SINR、BER（可先留空）、Gnull和期望增益损失。" }
        ],
        tags: ["N=8", "K=2000", "对角加载", "模态截断"]
      },
      {
        label: "论文精读",
        title: "层叠智能超表面怎样合成并分离近场OAM模态",
        tone: "accent",
        blocks: [
          { type: "text", text: "Torcolacci与Dardari于2026年7月10日提交的原始预印本研究Stacked Intelligent Metasurface（SIM，层叠智能超表面）辅助的Holographic Multiple-Input Multiple-Output（HMIMO，全息多输入多输出）近场链路。SIM由多层可编程超表面单元组成，意图在电磁传播域完成相位变换，减少完全数字化的大量射频链路。" },
          { type: "heading", text: "研究问题" },
          { type: "text", text: "离散、仅相位控制的SIM能否近似连续孔径OAM基，并在辐射近场形成多个可分离通道？阵面尺寸、单元密度和层数分别限制什么：可支持模态阶数，还是模态间串扰？" },
          { type: "heading", text: "方法" },
          { type: "text", text: "论文采用标量、单极化、Line-of-Sight（LOS，视距）近场Green函数建立端到端模型，并以归一化复相关作为目标，使合成场同时保持幅度加权的螺旋相位。作者使用多起点梯度优化与Adam（Adaptive Moment Estimation，自适应矩估计优化器）分别配置发射和接收SIM，再以每模态SINR、相关度与可达和速率评价。" },
          { type: "formula", text: "G(r,s)=exp(−jk‖r−s‖)/(4π‖r−s‖)；　fℓ(p)=A⁻¹ᐟ²exp(jℓφ)" },
          { type: "text", text: "r与s＝接收面和发射面位置向量，单位m；k＝自由空间波数，单位rad/m；A＝孔径面积，单位m²；ℓ＝OAM拓扑荷，整数；φ＝横截面方位角，单位rad。物理图像是每个发射面点经球面波传播到接收面，再由多层相位单元把这些路径重新组合成目标螺旋场。" },
          { type: "heading", text: "结果与证据边界" },
          { type: "list", items: [
            "在论文设定中，M=400个超表面单元时，除ℓ=0外多数模态的SINR为负；增大层数能整体改善，却不能补偿孔径不足。M=3600时，高阶模态相对小孔径情形约改善10–15 dB。",
            "和速率随层数先明显增长，在约8层以后出现收益递减；作者据此区分“孔径/采样限制可支持的阶数”和“层深控制串扰”的作用。",
            "这些是特定数值模型的结果，不是通用硬件指标。论文假设单极化标量场、视距近轴配置、相位-only且彼此不耦合的λ/2单元；未给出真实制造误差、损耗、宽带色散、功耗或外部干扰测量。"
          ] },
          { type: "heading", text: "对课题的可复现价值" },
          { type: "text", text: "最值得复现的不是复杂SIM优化，而是它的评价框架：在相同孔径与接收几何下建立模态传输矩阵，逐模态计算期望功率、跨模态干扰和噪声，再观察孔径截断如何限制高阶ℓ。可先用CST均匀圆阵或理想连续孔径替代SIM，复现“孔径增大”和“模式变换精度提高”对SINR的不同作用。" },
          { type: "sources", items: [
            { label: "arXiv原文：OAM-Enabled Holographic MIMO Communications with Stacked Intelligent Metasurfaces（2026-07-10）", url: "https://arxiv.org/abs/2607.09479" },
            { label: "arXiv HTML全文：数值设置、SINR与局限可直接核对", url: "https://arxiv.org/html/2607.09479v1" }
          ] }
        ],
        tags: ["SIM", "HMIMO", "近场Green函数", "孔径与串扰"]
      },
      {
        label: "术语与思考题",
        title: "把输入难度、空间结构和输出性能分开",
        layout: "wide",
        blocks: [
          { type: "list", items: [
            "Jam-to-Signal ratio（J/S，干信比）：接收输入端干扰功率与期望信号功率之比；本期用它扫描测试难度，而不是当作算法输出。",
            "Signal-to-Interference-plus-Noise Ratio（SINR，信干噪比）：期望信号功率与干扰加噪声功率之比；本期比较阵元域、完整模态域和截断模态域接收器。",
            "Interference covariance matrix（干扰协方差矩阵）：描述各端口干扰功率及端口间相关性的矩阵；本期它决定MVDR把零陷放在哪里。",
            "Channel State Information（CSI，信道状态信息）：接收机或发射机掌握的信道幅相信息；本期要求明确是完美、估计还是仅统计CSI。",
            "Minimum Variance Distortionless Response（MVDR，最小方差无失真响应）：保持期望信号响应不变并最小化输出干扰加噪声功率的线性接收器；本期用作公平基线。",
            "Diagonal loading（DL，对角加载）：给样本协方差加一个正的单位矩阵项；本期用来改善有限快照下求逆稳定性和轻度模型失配鲁棒性。",
            "Frequency Range 3（FR3，6–24 GHz新中频段）：介于传统蜂窝中低频与毫米波之间的研究频段称呼；本期用其近期预印本观察大孔径信道建模需求。",
            "Mode truncation（模态截断）：只保留部分OAM/DFT模态进行处理；本期用它区分坐标变换与真正的降维约束。"
          ] },
          { type: "heading", text: "思考题" },
          { type: "text", text: "若8阵元圆阵的期望信号主要落在ℓ=+1模态，干扰主要落在ℓ=−1模态，固定模态选择看似可以轻松抑制。现在让接收阵列横向偏移，并使期望/干扰的模态响应相关系数ρ从0.1升到0.9：请比较固定ℓ=+1选择器、三模态MVDR和全端口MVDR的输出SINR、期望增益损失与快照需求；说明在什么条件下“模态先验”能降低估计方差，又在什么条件下会变成有害偏差。" }
        ],
        tags: ["J/S", "SINR", "CSI", "研究生思考题"]
      }
    ]
  },
  {
    issue: 6,
    date: "2026-08-04",
    dateLabel: "2026年8月4日 · ISSUE 06",
    updatedAt: "2026-08-04 10:10",
    title: "互耦与嵌入方向图：让理想涡旋阵列回到真实端口",
    summary: "从多端口阻抗、嵌入阵元方向图和有源反射系数出发，解释互耦怎样同时改变馈电电流、端口匹配与辐射场，并给出把SIMULIA CST Studio Suite（CST，全波电磁仿真软件）的逐端口数据接入MATLAB模态分析的最小流程。Orbital Angular Momentum（OAM，轨道角动量）是本期连接涡旋电磁场与通信模态的主线。近7日未发现足够可靠的新动态，行业观察扩展至近30日并标注发布日期与证据边界。",
    readingMinutes: 24,
    modules: [
      {
        label: "今日结论",
        title: "互耦不是一个可事后补上的固定损耗",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "list", items: [
            "Mutual coupling（MC，阵元互耦）是一个阵元产生的电磁场在其他阵元端口与导体上感生电压、电流的过程。直观上，每个阵元既在辐射，也在被邻居重新激励；因此实际端口电流不再等于理想权值。",
            "Embedded element pattern（EEP，嵌入阵元方向图）是在阵列环境中只激励一个端口、其余端口按规定负载终接时得到的复方向图。它把边缘效应、散射与互耦写进每个端口的空间响应，是连接CST全波模型与MATLAB波束/模态算法的实用接口。",
            "相控阵扫描或OAM模态切换会改变所有端口的相对相位，也就改变每个端口看到的有源阻抗和匹配状态。单看孤立阵元的S₁₁＝端口1反射系数，量纲为1，无法证明整个扫描域或所有拓扑荷都匹配良好。",
            "对OAM抗干扰系统，互耦会破坏理想离散傅里叶变换模态的循环对称性，形成模态串扰，并可能让固定模态滤波器损失期望信号；但在约束完备的设计中，互耦也可能被建模和利用，不能简单等同于有害噪声。",
            "截至2026年8月4日10:10（北京时间），近7日未发现足够可靠、直接相关且发布日期可核对的新动态；本期扩展到近30日，使用2026年7月23日公开的原始预印本，并明确它尚未构成通用工程结论。"
          ] }
        ],
        tags: ["Mutual coupling", "EEP", "有源匹配", "OAM模态串扰"]
      },
      {
        label: "核心理论",
        title: "从理想权值到真实电流、端口匹配与复远场",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "text", text: "先建立物理图像：N个馈电端口像N个彼此相连的电磁振子。端口m的电压不仅由自己的电流决定，也包含其他端口电流经空间和结构耦合产生的贡献。因此，波束或OAM模式真正由端口电流与嵌入方向图共同决定，而不是只由移相器设定值决定。" },
          { type: "heading", text: "条件与变量：多端口网络" },
          { type: "text", text: "设N＝阵元/端口数；v∈ℂᴺ＝端口电压向量，单位V；i∈ℂᴺ＝端口电流向量，单位A；Z∈ℂᴺˣᴺ＝阻抗矩阵，单位Ω。Zmn＝端口n的电流对端口m电压的影响；m≠n时就是互阻抗。若源内阻矩阵为Zs，则在一种常见戴维南等效约定下，源电压vs与实际电流满足下式。" },
          { type: "formula", text: "v=Zi；　i=(Z+Zs)⁻¹vs" },
          { type: "text", text: "这说明“给定复电压权值”与“得到相同复电流权值”不是一回事。阵元间距变小、工作频率变化、扫描角或OAM阶次改变时，Z及电流分布都可能显著变化；具体关系还取决于端口参考面、源阻抗与终接条件。" },
          { type: "heading", text: "用嵌入阵元方向图合成真实场" },
          { type: "text", text: "令eₙ(θ,φ)＝第n个端口的复EEP，单位可按V/m或归一化场约定；θ＝极角，单位rad或°；φ＝方位角，单位rad或°；bₙ＝与EEP参考条件一致的复行波或激励系数。直观上，先逐端口测出阵列真实的“空间字典”，再用实际系数线性叠加。" },
          { type: "formula", text: "E(θ,φ)=Σₙ₌₁ᴺ bₙeₙ(θ,φ)" },
          { type: "text", text: "若所有eₙ只是同一个孤立方向图的旋转/平移副本，上式可退化为熟悉的阵元方向图乘阵列因子。真实有限圆阵中，边缘、馈线、平台和互耦会使各EEP幅相不同；此时继续使用理想阵列因子，会把模型误差错误归因给信道或算法。" },
          { type: "heading", text: "扫描状态决定有源反射" },
          { type: "text", text: "S-parameter（S参数，散射参数）矩阵S描述端口入射行波a与反射行波b的线性关系。对给定激励向量a，端口m的active reflection coefficient（Γact,m，有源反射系数）等于该端口总反射波与入射波之比。直观上，它是在所有端口同时工作时检查端口m是否仍然匹配。" },
          { type: "formula", text: "b=Sa；　Γact,m=bm/am=Σₙ Smn(an/am)；　VSWRm=(1+|Γact,m|)/(1−|Γact,m|)" },
          { type: "text", text: "VSWR（Voltage Standing Wave Ratio，电压驻波比）反映端口失配，量纲为1。由于an/am随扫描角或OAM拓扑荷ℓ变化，同一个物理阵列会具有不同的Γact,m；当某些状态出现|Γact,m|接近1时，可能产生扫描盲区、强失配或功放负载风险。" },
          { type: "heading", text: "与OAM模态矩阵的关系" },
          { type: "text", text: "令F∈ℂᴺˣᴺ＝归一化Discrete Fourier Transform（DFT，离散傅里叶变换）矩阵，F的列给出理想均匀圆阵的角向模态权值；C＝由全波端口响应、传播与接收投影共同形成的实际端口域算子。则G＝FᴴCF是实际模态传输矩阵。理想循环对称时G近似对角；互耦若仍严格循环对称，可改变各模态增益而不一定造成模态间混合，真正的非对角串扰通常来自有限阵列、非一致EEP、馈电/负载差异或平台破坏对称性。" },
          { type: "formula", text: "G=FᴴCF；　κoff=‖G−diag(diag(G))‖F²/‖G‖F²" },
          { type: "text", text: "κoff＝模态矩阵非对角能量占比，量纲为1；它衡量固定DFT/OAM基的失配，但不等于误码率或抗干扰增益。应同时记录各模态接受功率、辐射效率和链路信噪比。" }
        ],
        tags: ["v=Zi", "嵌入方向图", "Γact", "κoff"]
      },
      {
        label: "课题连接",
        title: "OAM抗干扰：先分清可校准失配与物理自由度",
        tone: "accent",
        blocks: [
          { type: "heading", text: "合理结论" },
          { type: "list", items: [
            "若CST或实测EEP稳定、端口参考条件一致，可以在MATLAB中用真实空间响应替代理想导向向量。这样设计的Minimum Variance Distortionless Response（MVDR，最小方差无失真响应）或Linearly Constrained Minimum Variance（LCMV，线性约束最小方差）接收器，能把确定性的互耦与方向图差异纳入期望信号保持约束。",
            "若阵列和加载保持旋转对称，互耦矩阵可能仍是循环矩阵，DFT/OAM基仍可作为本征基；此时主要变化是各模态的匹配、效率和增益不同，而非必然产生跨模态串扰。",
            "若边缘、馈线、阵元误差或平台使EEP不一致，固定模态投影会产生泄漏。用G的非对角能量定位问题后，再比较基于真实C的自适应权值，可区分“模态基失配”和“信道本身不可分”。"
          ] },
          { type: "heading", text: "适用条件" },
          { type: "text", text: "EEP合成要求线性、时不变、小信号近似成立，并且导出场与求解权值使用同一频率、极化分量、端口参考阻抗、终接条件、坐标系和相位基准。功率放大器压缩、温漂、开关状态变化或人体/平台靠近会改变模型，需要重新标定或做鲁棒性边界。" },
          { type: "heading", text: "仍有争议或待验证的主张" },
          { type: "text", text: "“去耦一定提升系统性能”和“互耦一定降低容量”都过于绝对。去耦网络可能改善端口独立性，却引入插损、带宽限制、噪声和成本；保留并利用互耦也可能在特定约束下改善方向图，但通常增加电流、源电压、效率和误差敏感性压力。对OAM抗干扰，应固定物理孔径、总接受/辐射功率、射频通道数和校准精度，比较输出Signal-to-Interference-plus-Noise Ratio（SINR，信干噪比）、Bit Error Rate（BER，误码率）、零陷深度与期望信号损失。" },
          { type: "formula", text: "SINRout=Pₛ|wᴴhₛ|²/[wᴴ(Rⱼ+Rₙ)w]" },
          { type: "text", text: "其中Pₛ＝期望信号功率，单位W；hₛ＝含EEP和互耦的期望信号导向向量；w＝接收权值；Rⱼ与Rₙ分别为干扰和噪声协方差矩阵，单位W。该式只用于接收端防御性评估，不涉及对外发射干扰。" }
        ],
        tags: ["MVDR/LCMV", "模型一致性", "校准", "防御性评估"]
      },
      {
        label: "行业需求",
        title: "近30日信号：阵列优化开始把电磁端口约束放进算法内部",
        layout: "wide",
        tone: "industry",
        priority: "证据分级",
        blocks: [
          { type: "heading", text: "A｜近7日动态核验结果" },
          { type: "text", text: "截至2026年8月4日10:10（北京时间），未发现近7日内同时满足“原始公开来源、发布日期可核对、与相控阵/OAM/防御性抗干扰直接相关”的足够新动态。搜索结果的抓取日期和网页更新时间不作为事件发布日期，因此本期明确扩展到近30日。" },
          { type: "heading", text: "B｜电磁感知流体天线阵列预印本（中等证据：原始预印本，2026-07-23）" },
          { type: "text", text: "Zhang等人在2026年7月23日提交的《Electromagnetic-Aware Fluid Antenna Array》中，把位置相关多端口阻抗、互耦、辐射/接受功率、源电压可实现性与信道一起写入流体天线阵列优化。论文给出单波束超指向与多用户加权和速率两个仿真问题，并报告在其模型和基线下的旁瓣及和速率改进。它是尚待同行评审的预印本，不能外推为任意阵列、任意信道或产品部署中的确定收益。" },
          { type: "list", items: [
            "相控阵需求翻译：不能只报理想阵列增益；还应给工作带宽、扫描范围、每个扫描状态的有源VSWR、实现增益、旁瓣、交叉极化、接受功率、最大端口电流/电压、效率、校准频率、功耗与成本。",
            "OAM/结构化场需求翻译：给出各拓扑荷下的有源匹配、总效率、EEP合成场、模态串扰矩阵、模态纯度、偏轴/频率/负载误差容差，以及同孔径常规波束赋形基线。",
            "抗干扰需求翻译：在给定Jammer-to-Signal ratio（J/S，干信比）、干扰角分布和模型误差下，报告输出SINR、BER、零陷深度和宽度、期望信号增益损失、收敛时间与5%分位性能。",
            "证据边界：该预印本支持“优化时应显式纳入电磁约束”的研究趋势；它不证明流体阵列已经标准化，也不证明互耦在所有情况下有益。"
          ] },
          { type: "heading", text: "C｜IMT-2030强调统一评估而非单张最佳场图（强证据：ITU-R官方状态）" },
          { type: "text", text: "International Telecommunication Union Radiocommunication Sector（ITU-R，国际电信联盟无线电通信部门）页面显示：2026年6月完成的IMT-2030候选无线接口评估指南仍是提交Study Group 5（SG 5，第5研究组）、计划于2026年12月审议的草案；其评估框架区分仿真、分析和检查，并纳入近场与空间非平稳信道。对阵列课题的直接含义是：电磁模型、链路模型、场景和复现方法必须一致；这不是ITU-R对OAM或某种互耦利用方案的认可。" },
          { type: "sources", items: [
            { label: "arXiv原文：Electromagnetic-Aware Fluid Antenna Array（2026-07-23）", url: "https://arxiv.org/abs/2607.21375" },
            { label: "arXiv PDF：Electromagnetic-Aware Fluid Antenna Array", url: "https://arxiv.org/pdf/2607.21375" },
            { label: "ITU-R：IMT-2030评估指南草案状态与扩展信道模型（2026年6月）", url: "https://www.itu.int/en/ITU-R/study-groups/rsg5/rwp5d/imt-2030/pages/default.aspx" },
            { label: "ITU-R：IMT-2030提交与独立评估组织状态（截至2026年7月）", url: "https://www.itu.int/en/ITU-R/study-groups/rsg5/rwp5d/imt-2030/Pages/submission-eval.aspx" }
          ] }
        ],
        tags: ["近30日", "电磁—通信联合优化", "有源VSWR", "证据边界"]
      },
      {
        label: "CST × MATLAB",
        title: "最小任务：用逐端口EEP重构ℓ=1圆阵复场",
        blocks: [
          { type: "text", text: "目标是在60—90分钟内回答一个具体问题：8阵元均匀圆阵中，真实EEP合成的ℓ=1场与“孤立阵元方向图×理想阵列因子”相差多少？先做单频线性模型，不加入外部干扰源。" },
          { type: "list", items: [
            "CST建模：沿圆周放置8个相同阵元，明确频率f、圆阵半径a、端口参考阻抗和坐标系。保留真实馈电与有限地板；运行8次或使用多端口求解，每次只激励一个端口，其余7个端口用同一匹配负载终接。",
            "数据导出：对每个端口导出同一球面网格上的复Eθ与Eφ，保留幅度和相位或实部和虚部；同时导出8×8复S矩阵。文件名写明端口、频率、极化分量和相位约定。",
            "MATLAB合成：令φₙ=2πn/8，理想ℓ=1权值wₙ=8⁻¹ᐟ²exp(jφₙ)。用逐端口EEP计算Eᴱᴱᴾ=Σₙwₙeₙ；再用一个孤立阵元方向图与几何相位计算Eᴵᴱᴾ作为对照。",
            "端口检查：把w作为同时激励的入射行波a，计算b=Sa与Γact,m=bm/am；画8个端口的|Γact,m|，并与ℓ=0、2状态比较。若使用CST直接同时激励结果，先核对其归一化和输入功率定义。",
            "模态检查：在固定θ环上采样复场，对φ做离散傅里叶变换，记录目标ℓ=1功率占比、最强泄漏模态以及EEP模型与理想模型的归一化复场误差。"
          ] },
          { type: "formula", text: "ηℓ=|cℓ|²/Σq|cq|²；　cℓ=(1/M)ΣₖE(φₖ)e⁻ʲℓφₖ" },
          { type: "text", text: "其中M＝方位采样点数；cℓ＝第ℓ个角向傅里叶系数；ηℓ＝该采样环上的模态功率占比，量纲为1。ηℓ不是整个三维辐射场的总模态纯度，必须标注θ、频率、极化和采样半径/远场条件。" },
          { type: "formula", text: "εfield=minα ‖Eᴱᴱᴾ−e^{jα}Eᴵᴱᴾ‖₂/‖Eᴱᴱᴾ‖₂" },
          { type: "text", text: "验收输出四项：S矩阵幅相热图、各ℓ的最大|Γact|、固定θ环模态谱、εfield。若差异大，依次检查端口顺序、终接、场坐标、极化基、全局相位和功率归一化，再讨论互耦。" }
        ],
        tags: ["逐端口EEP", "8×8 S矩阵", "ℓ=1", "复场误差"]
      },
      {
        label: "论文精读",
        title: "2026预印本：把互耦从事后修正变成优化变量",
        tone: "accent",
        blocks: [
          { type: "text", text: "本期精读Zhang、Wu、Jiang、Chen与Zhang的《Electromagnetic-Aware Fluid Antenna Array》，arXiv:2607.21375，提交日期为2026年7月23日。它与今天的主线高度相关，因为作者质疑“端口是独立信道采样点”的简化，并把电磁端口网络直接嵌入通信优化。注意：这是公开预印本，当前证据等级低于已完成同行评审的期刊论文。" },
          { type: "heading", text: "研究问题与方法" },
          { type: "text", text: "论文研究Fluid Antenna Array（FAA，流体天线阵列），即端口位置可在给定区域内重配置的阵列。作者建立电流域框架，联合描述位置相关阻抗矩阵、互耦、辐射功率、接受功率、源电压可行域与位置相关信道；半波振子闭式模型只是示例，框架也允许替换为全波、实测或代理模型得到的阻抗与EEP。" },
          { type: "heading", text: "两个优化问题" },
          { type: "list", items: [
            "单波束超指向：联合优化端口电流和位置，同时约束旁瓣、电流、源电压与几何可行域；其物理核心是高指向性不能脱离供电与敏感性约束讨论。",
            "多用户通信：在接受功率、端口电流/电压和最小间距约束下，联合优化预编码与位置，以提高加权和速率；算法交替处理电流/预编码子问题和位置更新。",
            "作者报告：在论文给定仿真配置和基线下，电磁感知的位置优化获得更低旁瓣与持续的和速率增益；这是模型内结果，不是跨硬件平台的测量结论。"
          ] },
          { type: "heading", text: "局限与不能外推的部分" },
          { type: "list", items: [
            "论文主要结果基于建模与仿真，尚缺不同天线、馈线、损耗、功放非线性和测量误差下的广泛实验验证。",
            "位置可重配置机制的速度、可靠性、控制功耗、制造公差与校准开销，会影响净收益；通信和电磁约束的尺度也可能使优化对初值敏感。",
            "论文没有证明OAM拥有额外自由度，也没有证明互耦普遍有益。它支持的是方法论：当阵列紧凑或可重构时，应把真实阻抗、功率和场模型放进公平基线。"
          ] },
          { type: "heading", text: "对本课题的可复现价值" },
          { type: "text", text: "不必先实现流体阵列。可把论文框架缩成固定8阵元UCA：用CST导出的Z/S矩阵和EEP替代半波振子闭式模型；对ℓ=0、1、2分别计算有源匹配、接受功率和模态谱；再在相同总接受功率、最大端口电流和相位误差下比较理想DFT权、基于EEP的模态校正权与MVDR/LCMV权。这样能检验“显式电磁约束是否改变OAM抗干扰结论”。" },
          { type: "sources", items: [
            { label: "论文摘要与版本记录：arXiv:2607.21375（2026-07-23）", url: "https://arxiv.org/abs/2607.21375" },
            { label: "论文PDF：Electromagnetic-Aware Fluid Antenna Array", url: "https://arxiv.org/pdf/2607.21375" },
            { label: "同行评审背景：Measuring Array Mutual Impedances Using Embedded Element Patterns, IEEE TAP 2023", url: "https://research.chalmers.se/publication/533183" },
            { label: "IEEE DOI：10.1109/TAP.2022.3217324", url: "https://doi.org/10.1109/TAP.2022.3217324" }
          ] }
        ],
        tags: ["FAA", "电流域模型", "功率约束", "可复现基线"]
      },
      {
        label: "术语与思考题",
        title: "把端口网络、辐射场和模态域对齐",
        layout: "wide",
        blocks: [
          { type: "list", items: [
            "Mutual coupling（MC，阵元互耦）：阵元之间通过电磁场交换能量并改变端口电流、阻抗和方向图；本期用于解释理想权值为何不等于真实辐射状态。",
            "Embedded element pattern（EEP，嵌入阵元方向图）：只激励一个阵列端口、其余端口按规定负载终接时的复方向图；本期作为CST到MATLAB的空间响应字典。",
            "Mutual impedance（互阻抗）：阻抗矩阵的非对角元素Zmn，表示端口n电流对端口m电压的贡献，单位Ω；本期用于把互耦写成多端口方程。",
            "Active reflection coefficient（有源反射系数）：多端口同时激励时某端口总反射波与入射波之比Γact,m；本期用于比较不同扫描角或OAM阶次的实际匹配。",
            "Voltage Standing Wave Ratio（VSWR，电压驻波比）：由反射系数换算的失配指标，量纲为1；本期用于识别某个模态状态是否接近强反射。",
            "Scan blindness（扫描盲区）：阵列在某些扫描状态因表面波、互耦或有源失配等机制而无法有效辐射/接收的现象；本期提醒不能用孤立阵元S₁₁覆盖整个扫描域。",
            "Jammer-to-Signal ratio（J/S，干信比）：接收机输入处干扰功率与期望信号功率之比，常用dB；本期用于规定防御性抗干扰测试强度。",
            "Bit Error Rate（BER，误码率）：错误比特数与总传输比特数之比，量纲为1；本期用于把场和端口差异落到通信结果。"
          ] },
          { type: "heading", text: "思考题" },
          { type: "text", text: "一个理想8阵元UCA的互耦矩阵严格循环对称，因此FᴴZF仍为对角矩阵；现在保持阵元位置不变，只让第1端口的终接阻抗偏离50 Ω，并使第5阵元EEP幅度降低1 dB。请分别判断端口电流、有源反射系数、模态矩阵G的非对角项和ℓ=1输出SINR会怎样变化。设计一个CST—MATLAB实验，把“匹配变化”“辐射效率变化”和“模态基失配”三类效应分开量化。" }
        ],
        tags: ["Mutual impedance", "Active reflection", "Scan blindness", "研究生思考题"]
      }
    ]
  },
  {
    issue: 5,
    date: "2026-08-03",
    dateLabel: "2026年8月3日 · ISSUE 05",
    updatedAt: "2026-08-03 15:13",
    title: "OAM、MIMO与波束赋形：同一信道的三种语言",
    summary: "从信道矩阵和基变换出发，说明OAM模态、传统波束赋形与MIMO奇异模之间的关系：DFT/OAM基在旋转对称圆阵链路中可成为本征基，但基变换不创造额外空间自由度；抗干扰收益必须由实际信道、约束和公平基线共同验证。近7日未发现足够可靠的新动态。",
    readingMinutes: 24,
    modules: [
      {
        label: "今日结论",
        title: "OAM是有物理意义的空间基，但不是脱离MIMO的新容量维度",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "list", items: [
            "窄带阵列链路都可写成y=Hx+n。OAM收发通常是在阵元端口前后乘DFT型矩阵；若变换是酉的，它只改变坐标表示，不增加H的秩、奇异值或总容量。",
            "同轴、等半径或规则圆阵、自由空间且阵元响应近似旋转对称时，H接近循环矩阵，DFT/OAM模态可近似对角化信道；偏轴、互耦、遮挡和多径会破坏这一条件。",
            "波束赋形回答“怎样加权形成或抑制某个空间响应”，MIMO回答“完整多端口信道有多少可用子通道”，OAM则提供一组带角向相位结构的固定基；三者不是互斥技术。",
            "对OAM抗干扰课题，真正可检验的问题是：在相同孔径、射频通道、总功率、CSI误差和训练开销下，模态约束能否让输出SINR、BER或鲁棒性优于MVDR/LCMV、SVD等基线。",
            "截至2026年8月3日15:13（北京时间），近7日未发现足够可靠、直接相关的新动态；本期采用权威常青资料与已公开标准进程，不制造热点。"
          ] }
        ],
        tags: ["OAM vs MIMO", "基变换", "空间自由度", "公平基线"]
      },
      {
        label: "核心理论",
        title: "从端口信道H看DFT基、奇异模与容量",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "text", text: "设发射阵列有Nt个端口、接收阵列有Nr个端口，x、y分别是端口复包络，H∈ℂ^{Nr×Nt}包含传播、阵元方向图、极化、互耦和参考面定义。窄带模型中，所有空间处理都应回到这个对象。" },
          { type: "formula", text: "y=Hx+n；　H=UΣVᴴ；　r=rank(H)≤min(Nt,Nr)" },
          { type: "heading", text: "三种语言分别在做什么" },
          { type: "list", items: [
            "波束赋形：选择发射权f和接收权w，得到标量通道wᴴHf；可用于定向增益、零陷或多约束优化。",
            "MIMO奇异模：H的SVD给出成对的V和U，使UᴴHV=Σ；在已知H且约束匹配时，这是一组互不耦合的信道本征方向。",
            "OAM/角向DFT模态：对N阵元UCA使用F[n,ℓ]=N⁻¹ᐟ²exp(jℓφn)。它由几何对称性预先规定，具有清晰的角向阶次，但一般不等于任意H的奇异向量。"
          ] },
          { type: "heading", text: "为什么同轴圆阵会把三种语言对齐" },
          { type: "text", text: "若发射与接收UCA同轴且信道只依赖阵元角度差，即Hmn=h[(m−n) mod N]，则H是循环矩阵。循环矩阵的本征向量正是DFT列，因此OAM模态域信道FᴴHF为对角阵。此时“发送拓扑荷ℓ”与“激励一个MIMO本征模”可以是同一件事。" },
          { type: "formula", text: "Hmn=h[(m−n) mod N] ⇒ FᴴHF=Λ；　λℓ=Σq h[q]e^{−j2πℓq/N}" },
          { type: "heading", text: "基变换保留什么，改变什么" },
          { type: "text", text: "对任意酉矩阵Fr、Ft，Hmode=FrᴴHFt与H具有相同奇异值、Frobenius范数和秩。它能把结构显露出来，却不能凭空提高自由度。若固定OAM基不再对角化H，非对角项表示基失配下的模态串扰；SVD可重新对角化已知H，但需要CSI并可能带来训练、反馈和硬件代价。" },
          { type: "formula", text: "Hmode=FrᴴHFt；　σi(Hmode)=σi(H)；　C=Σi log₂(1+piσi²/N₀)" },
          { type: "heading", text: "自由度、容量与模态数不能混用" },
          { type: "text", text: "可生成N个离散DFT权值，不表示N个模态都有可用链路增益。有效自由度取决于奇异值相对噪声和功率预算的大小；高阶OAM模态常因有限口径、距离和采样而具有很小的σi。报告容量时还必须说明总发射功率、噪声带宽、功率分配和CSI假设。" }
        ],
        tags: ["H=UΣVᴴ", "循环矩阵", "DFT本征基", "有效DoF"]
      },
      {
        label: "课题连接",
        title: "把“模态抗干扰”改写成受约束的接收优化",
        tone: "accent",
        blocks: [
          { type: "heading", text: "合理结论" },
          { type: "list", items: [
            "若期望信号和干扰在实测通道中投影到不同角向子空间，固定模态滤波可以低复杂度分离二者；收益来自空间可分性，而非拓扑荷标签本身。",
            "OAM基可作为结构化先验：用少数模态描述期望信号，能减少待估参数或给LCMV增加保持约束；但先验错误会造成期望信号自损失。",
            "在对称性被破坏后，联合波束—模态接收可写成阵元域优化，再用模态域解释权值；无需把两者包装成互斥方案。"
          ] },
          { type: "formula", text: "SINRout=Pₛ|wᴴhₛ|²/[wᴴ(Rⱼ+Rₙ)w]；　wLCMV=R⁻¹C(CᴴR⁻¹C)⁻¹f" },
          { type: "heading", text: "适用条件" },
          { type: "text", text: "固定OAM滤波需要稳定的阵列坐标、幅相校准和足够角向采样；自适应接收还需要训练数据足以估计协方差或CSI。宽带时H、模态纯度和最优权值随频率变化，应逐子载波或用宽带约束评估，不能只看中心频点。" },
          { type: "heading", text: "仍有争议或待验证的主张" },
          { type: "text", text: "“OAM在同孔径下提供额外容量”以及“OAM天然免疫同频干扰”都不是一般性结论。建议将固定DFT/OAM、SVD、MVDR/LCMV和相同通道数的常规波束赋形置于同一Monte Carlo框架，固定孔径、通道数、总功率、J/S、干扰角分布、CSI误差和计算预算，再比较输出SINR、BER/BLER及5%分位性能。" }
        ],
        tags: ["结构先验", "LCMV", "期望信号保护", "鲁棒性分位数"]
      },
      {
        label: "行业需求",
        title: "标准进程强调可评估性；注意3GPP中的OAM缩写碰撞",
        layout: "wide",
        tone: "industry",
        priority: "证据分级",
        blocks: [
          { type: "heading", text: "A｜近7日动态核验结果" },
          { type: "text", text: "截至2026年8月3日15:13（北京时间），未发现近7日内同时满足“公开原始来源、日期可核对、与阵列/OAM/防御性抗干扰直接相关”的足够新动态。ITU-R提交与评估页面写明状态截至2026年7月，但未给出可核对到日的更新日期，因此只作为标准进程状态，不冒充近7日新闻。" },
          { type: "heading", text: "B｜IMT-2030进入候选技术提交与独立评估组织准备阶段（强证据：ITU-R官方页面，状态截至2026-07）" },
          { type: "text", text: "ITU-R官方页面显示，IMT-2030地面无线接口建议书的制定流程已经启动；页面列出的独立评估组织申请仍在审查，列名不代表获批。ITU-R另一官方页面说明2026年6月完成的评估指南仍是提交SG 5、计划于2026年12月审议的草案，并包含近场、空间非平稳等扩展信道模型。对阵列研究的强信号是：方案要能在规定环境、模型和评价方法下复核，而不是只展示最佳场图。" },
          { type: "list", items: [
            "阵列/基站：工作带宽、扫描范围、扫描损耗、EIRP/EIS、旁瓣、交叉极化、校准误差、每通道与整机功耗。",
            "结构化场：物理孔径、距离/波长、有效DoF、奇异值谱、模态串扰矩阵、偏轴/倾斜/频偏容差，以及同孔径MIMO基线。",
            "高可靠抗干扰：干扰模型与J/S、输出SINR、BER/BLER、零陷深度和宽度、期望信号损失、收敛时间、CSI误差及5%分位性能。",
            "证据边界：评估指南目前是草案；近场和空间非平稳被纳入模型，不等于ITU-R认可OAM为独立的新空分维度。"
          ] },
          { type: "heading", text: "C｜3GPP的NR_MIMO-OAM不是轨道角动量（强证据：3GPP官方工作项，2026-06-03启动）" },
          { type: "text", text: "3GPP门户存在Rel-20工作项“NR_MIMO-OAM”，但其正式名称是Management enhancements related to NR MIMO，即NR MIMO管理增强；负责组为SA5，父项是NR MIMO Phase 6。这里的OAM是该工作项内部缩写，不能据此声称“3GPP已采纳orbital angular momentum”。这是检索和行业汇报中必须主动消歧的例子。" },
          { type: "list", items: [
            "可确认：工作项状态为PCG approved，开始日期2026-06-03，计划结束2027-03-03。",
            "不可确认：仅凭工作项元数据，不能推断具体射频、天线或OAM涡旋波条款，也不能宣称产品已部署。",
            "需求翻译：若研究声称可进入系统标准，应明确它作用于物理层信道、天线实现、波束管理还是网管接口，并给出对应的规范对象和可测试参数。"
          ] },
          { type: "sources", items: [
            { label: "ITU-R：IMT-2030提交与评估流程，独立评估组织状态截至2026年7月", url: "https://www.itu.int/en/ITU-R/study-groups/rsg5/rwp5d/imt-2030/Pages/submission-eval.aspx" },
            { label: "ITU-R：IMT-2030评估指南草案状态与扩展信道模型（2026年6月）", url: "https://www.itu.int/en/ITU-R/study-groups/rsg5/rwp5d/imt-2030/pages/default.aspx" },
            { label: "3GPP：Rel-20工作项NR_MIMO-OAM的正式名称与状态", url: "https://portal.3gpp.org/desktopmodules/WorkItem/WorkItemDetails.aspx?workitemId=1120105" },
            { label: "3GPP：Release 20官方概览与冻结时间线", url: "https://www.3gpp.org/specifications-technologies/releases/release-20" }
          ] }
        ],
        tags: ["IMT-2030评估", "NR MIMO", "缩写消歧", "指标化"]
      },
      {
        label: "CST × MATLAB",
        title: "最小任务：比较固定OAM基与SVD基",
        blocks: [
          { type: "text", text: "目标是在60分钟内用同一信道矩阵验证“基变换不改变奇异值，但固定OAM基会因失配产生串扰”。沿用8阵元发射UCA与8阵元接收UCA；优先使用CST多端口S参数或端口到接收探针的复响应，暂时没有数据时可用自由空间点源信道作基线。" },
          { type: "list", items: [
            "CST：在单一工作频点逐个激励8个发射端口，其他端口按统一阻抗终端；记录8个接收端口复响应，组装H，并保存端口顺序、参考阻抗、频率和坐标系。",
            "MATLAB：构造8×8酉DFT矩阵F，计算Hmode=FᴴHF、[U,S,V]=svd(H)；核对svd(Hmode)与diag(S)在数值精度内一致。",
            "对齐基线：计算非对角能量κoff=‖Hmode−diag(diag(Hmode))‖F²/‖Hmode‖F²，并记录有效奇异值数Neff=(Σσi²)²/Σσi⁴。",
            "失配测试：把接收UCA横移0.05λ和0.20λ后重复求解或重算传播距离；比较κoff、固定DFT零迫解的噪声增强以及SVD基的奇异值。",
            "抗干扰扩展：加入一个公开、防御性仿真的空间干扰协方差Rj，只比较固定模态选择与MVDR接收的SINRout；不要设计或描述对外发射干扰。"
          ] },
          { type: "formula", text: "κoff=‖Hmode−diag(diag(Hmode))‖F²/‖Hmode‖F²；　Neff=(Σiσi²)²/Σiσi⁴" },
          { type: "text", text: "验收：酉变换前后的奇异值相对误差应接近机器精度；偏移后κoff通常上升，但H的奇异值如何变化要由几何和归一化决定，不能预设单调。最终画三图：|Hmode|热图、归一化奇异值谱、κoff随d/λ曲线。" }
        ],
        tags: ["多端口H", "FᴴHF", "SVD", "κoff"]
      },
      {
        label: "论文精读",
        title: "TWC 2026：圆阵LOS信道何时由OAM/DFT模态对角化",
        tone: "accent",
        blocks: [
          { type: "text", text: "本期精读Ding等人的《Spatial Multiplexing Over LOS Channels With Circular Arrays: Analysis and Design》，发表于IEEE Transactions on Wireless Communications第25卷、4936–4952页，DOI 10.1109/TWC.2025.3615506；Chalmers出版记录标为2026年期刊论文并提供作者全文。它比笼统争论“OAM还是MIMO”更进一步：直接把连续圆孔径本征模、离散圆阵采样和MIMO奇异值连接起来。" },
          { type: "heading", text: "研究问题与方法" },
          { type: "text", text: "论文研究同轴LOS圆形发射/接收结构的空间复用。作者先把连续圆天线间信道写成有界线性正规算子，以部署参数β（与发射半径、接收半径、波长和距离的组合有关）描述几何；再通过空间采样推到离散UCA及多个子UCA配置，推导奇异值和DFT收发结构。" },
          { type: "formula", text: "β∝RtRr/(λD)；　连续圆信道的角向本征函数为e^{jℓφ}，本征值由第一类Bessel函数决定" },
          { type: "heading", text: "主要结果" },
          { type: "list", items: [
            "OAM角向谐波是所研究连续圆LOS算子的本征模；离散UCA的DFT模态是连续模态的空间采样，对应奇异值带有采样/混叠效应。",
            "有效空间自由度通常随部署参数增加，但在固定角偏置下不保证单调；固定阵元数时，容量也不一定随部署参数单调增加。",
            "当阵元数相对部署参数不足时，接收角偏置会显著影响性能；阵元数增大后，离散阵列奇异值趋近连续圆结果，角偏置影响减弱。",
            "论文研究的非均匀多子UCA配置，在角偏置优化后相对均匀配置只有很小或没有增益。"
          ] },
          { type: "heading", text: "局限与证据边界" },
          { type: "text", text: "模型聚焦LOS、圆形几何及论文给定的电磁近似条件；结论不能直接覆盖任意偏轴、多径、强互耦、宽带色散或有限精度射频链。它证明的是特定算子中OAM基与MIMO本征模的关系，不是所有OAM实现都自动达到容量，也不是结构化场在感知、低复杂度处理或鲁棒先验上没有价值。" },
          { type: "heading", text: "可复现价值" },
          { type: "text", text: "论文给出的β—Bessel本征值—离散奇异值链条可作为今天CST/MATLAB任务的理想上界。先复现同轴UCA的FᴴHF近对角化，再加入真实嵌入方向图和互耦；“理想解析值→点源H→CST多端口H”的三级差异，正好量化工程实现把多少理论自由度变成了不可用的小奇异值。" },
          { type: "sources", items: [
            { label: "Chalmers出版记录：Ding et al., IEEE TWC 25, 4936–4952（2026）", url: "https://research.chalmers.se/en/publication/550276" },
            { label: "Chalmers作者全文PDF：Spatial Multiplexing Over LOS Channels With Circular Arrays", url: "https://research.chalmers.se/publication/550276/file/550276_Fulltext.pdf" },
            { label: "IEEE DOI：10.1109/TWC.2025.3615506", url: "https://doi.org/10.1109/TWC.2025.3615506" }
          ] }
        ],
        tags: ["LOS MIMO", "连续圆孔径", "Bessel本征值", "空间采样"]
      },
      {
        label: "术语与思考题",
        title: "区分模式标签、信道本征模和有效自由度",
        layout: "wide",
        blocks: [
          { type: "list", items: [
            "Unitary transform（酉变换）：满足QᴴQ=I的复线性变换；保持向量能量和矩阵奇异值，常用于阵元域与模态域切换。",
            "Singular mode（奇异模）：由H的左右奇异向量定义的成对收发空间方向，其增益为对应奇异值σi。",
            "Circulant matrix（循环矩阵）：每一行是上一行的循环移位；DFT向量是其固定本征基，是同轴规则UCA中OAM模态成立的数学核心。",
            "Effective degrees of freedom（有效自由度）：在给定SNR、功率和阈值下真正可用的空间子通道数；不等于可编号的模态数或阵元数。",
            "Noise enhancement（噪声增强）：ZF等逆信道处理在小奇异值方向放大噪声的现象，常使形式上可分的高阶模态在工程上不可用。"
          ] },
          { type: "heading", text: "思考题" },
          { type: "text", text: "一个8×8同轴UCA链路的Hmode=FᴴHF近似对角。现在加入一个横向偏移，使κoff从−25 dB升到−10 dB，但H的前四个奇异值几乎不变。请解释为什么“固定OAM解复用明显恶化”与“最优MIMO容量近似不变”可以同时成立；再设计一组包含CSI训练开销和射频移相精度的实验，判断SVD接收恢复容量所付出的工程代价。" }
        ],
        tags: ["Unitary transform", "Singular mode", "Circulant matrix", "研究生思考题"]
      }
    ]
  },
  {
    issue: 4,
    date: "2026-08-02",
    dateLabel: "2026年8月2日 · ISSUE 04",
    updatedAt: "2026-08-02 08:00",
    title: "有限孔径与接收几何：正交性在哪里失效",
    summary: "从接收积分域出发，区分有限但同轴的完整圆孔径、局部截获、横向偏轴和倾斜接收，解释功率损失与模态串扰为何不是同一件事，并把几何误差连接到输出SINR与BER。近7日未发现足够可靠的新动态，行业观察扩展至近30日并标注证据边界。",
    readingMinutes: 24,
    modules: [
      {
        label: "今日结论",
        title: "孔径变小先造成少收功率，破坏对称性才直接混合模态",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "list", items: [
            "有限半径的同轴完整圆孔径仍覆盖0到2π的全部方位角；若径向权重与方位角无关，exp(jℓφ)的角向正交性仍可保持。此时主要问题是截获功率下降，而不必然出现模态串扰。",
            "局部扇区、非圆孔径、横向偏轴、倾斜或坐标轴估计错误会打破方位对称性，使接收窗口的角向谱与信号模态谱卷积，从而产生非对角串扰。",
            "高阶OAM场通常具有更大的能量环和更快的空间变化；在固定链路距离与物理口径下，可收集功率、采样密度和容差往往比理想正交公式更早成为限制。",
            "抗干扰价值必须通过同一几何和硬件预算下的J/S、期望信号损失、输出SINR、BER/BLER与零陷深度验证；模态纯度只能作为其中一个前端诊断量。",
            "截至2026年8月2日08:00（北京时间），近7日未发现足够可靠、直接相关的新动态；本期不制造热点，行业观察扩展到近30日。"
          ] }
        ],
        tags: ["有限孔径", "接收几何", "功率损失", "模态串扰"]
      },
      {
        label: "核心理论",
        title: "把接收机写成一个带窗口的内积",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "text", text: "设接收面上的复场为E(r,φ)，接收窗口或权重为W(r,φ)，候选接收模态为ψₚ(r,φ)。模式p的复输出不是由相位图直接决定，而是由有限积分域上的加权内积决定。W同时包含物理孔径、阵元采样、幅相加权和不可用区域；dA=rdrdφ。" },
          { type: "formula", text: "yₚ=∬ₐ W(r,φ)ψₚ*(r,φ)E(r,φ)dA；　Hₚq=∬ₐ Wψₚ*ψq dA" },
          { type: "heading", text: "有限圆孔径不等于局部孔径" },
          { type: "text", text: "若ψq=Aq(r)exp(jqφ)，接收孔径是以同一轴为圆心、半径为R的完整圆盘，并且W=W(r)，则角向积分给出2πδₚq。减小R会改变每个模式的截获功率和归一化，但不会仅凭“半径有限”就混合不同整数角向阶次。相反，只接收一个扇区或使用方位不均匀的权重时，W具有非零角向谐波，H的非对角项随之出现。" },
          { type: "formula", text: "Hₚq=∫₀ᴿAₚ*(r)Aq(r)rdr · ∫₀²πe^{j(q−p)φ}dφ；　完整圆周时第二项=2πδₚq" },
          { type: "heading", text: "窗口谱解释部分孔径串扰" },
          { type: "text", text: "把窗口写成W(r,φ)=Σₖwₖ(r)exp(jkφ)，则q模态在p端口的泄漏由wₚ₋q控制。这个卷积图像很实用：阵元缺失、遮挡、扇区接收或不均匀校准，都可以先计算窗口的角向谱，再预测哪些阶次最容易相互耦合。" },
          { type: "formula", text: "Hₚq∝∫Aₚ*(r)Aq(r)wₚ₋q(r)rdr；　XTₚ←q=|Hₚq|²/|Hqq|²" },
          { type: "heading", text: "偏轴、倾斜与近场曲率是三类不同失配" },
          { type: "text", text: "横向偏移d改变每个采样点相对于真实涡旋轴的方位角和径向坐标；倾斜β使接收平面产生近似线性相位坡度，并改变投影孔径与极化；在辐射近场，阵元到接收点的距离Rₙ还带来球面波的幅度和二次相位。三者可以同时发生，不能用一个“偏移百分比”替代完整坐标变换。" },
          { type: "formula", text: "Eₙ∝e^{−jkRₙ}/Rₙ，Rₙ=‖rRx−rₙ‖；　倾斜小角近似相位项≈e^{jk(xβx+yβy)}" },
          { type: "text", text: "因此，评估接收几何时至少要报告频率f、波长λ、发射/接收口径Dt与Da、距离z、横向偏移d、倾角β、孔径中心和法向、极化分量、采样间距以及相位参考。只给d/Da而不说明z/λ和波束尺度，通常不足以复现实验。" }
        ],
        tags: ["Hₚq", "窗口谱", "偏轴d", "倾角β"]
      },
      {
        label: "课题连接",
        title: "从几何失配到OAM抗干扰接收链",
        tone: "accent",
        blocks: [
          { type: "heading", text: "合理结论" },
          { type: "list", items: [
            "同轴完整圆孔径缩小时，目标信号与干扰的截获功率可能以不同速率下降；即使目标模态纯度保持较高，输入SNR仍可能因目标功率损失而恶化。",
            "偏轴或倾斜会使固定DFT/OAM接收基与真实信道失配，串扰矩阵C出现非对角能量；若几何可估计，可以通过坐标重采样、相位补偿或直接以实测信道设计接收权减轻损失。",
            "对于防御性抗干扰，几何多样性只有在期望信号导向向量hₛ与干扰子空间可分时才有价值；应比较补偿前后输出SINR，并同时约束期望信号增益。"
          ] },
          { type: "formula", text: "SINRout=Pₛ|wᴴhₛ|²/[wᴴ(Rⱼ+Rₙ)w]；　κoff=‖C−diag(C)‖F²/‖C‖F²" },
          { type: "heading", text: "适用条件" },
          { type: "text", text: "补偿成立需要可用的复场或多通道CSI、稳定的时钟与相位参考，以及足够的空间采样。比较OAM、MVDR/LCMV和MIMO-SVD时，应固定物理孔径、有效射频通道数、总发射功率、带宽、CSI误差与训练开销。" },
          { type: "heading", text: "仍有争议或待验证的主张" },
          { type: "text", text: "“部分孔径仍能辨识拓扑荷”在某些算法和先验条件下可能成立，但不等于它能无代价恢复多路通信。模式标签识别、复符号检测与抗干扰增益是三个不同任务；应分别报告识别率、串扰/BER和J/S—SINRout曲线，并用未知偏轴、噪声和多径做盲测。" }
        ],
        tags: ["几何补偿", "κoff", "J/S", "公平比较"]
      },
      {
        label: "行业需求",
        title: "近30日信号：标准版本推进与几何可验证性",
        layout: "wide",
        tone: "industry",
        priority: "证据分级",
        blocks: [
          { type: "heading", text: "A｜近7日动态核验结果" },
          { type: "text", text: "截至2026年8月2日08:00（北京时间），未发现近7日内同时满足“公开原始来源、发布日期可核对、与阵列/OAM/抗干扰直接相关”的足够新动态。ETSI工作计划页面虽显示2026年7月27日更新，但其列出的TS 138 104 V19.4.0实际发布日期是2026年4月15日；页面更新时间不能冒充标准发布日期。" },
          { type: "heading", text: "B｜NR基站射频规范继续进入Rel-20版本轨迹（强证据：3GPP官方规格历史，2026-07-04上传）" },
          { type: "text", text: "3GPP规格门户记录TS 38.104《NR; Base Station radio transmission and reception》在RAN#112下上传V20.0.0，日期为2026年7月4日。该记录证明版本轨迹已进入20.0.0，但仅凭门户元数据不能断言某个具体天线条款已改变。对研究的直接启示是：论文中的“基站可用”不能只报单频方向图，而应映射到带宽、功率、接收灵敏度、OTA几何和可复现测试条件。" },
          { type: "list", items: [
            "相控阵/基站指标：工作频段与占用带宽、扫描范围、扫描损耗、EIRP/EIS、旁瓣、交叉极化、波束指向误差、每通道功耗和校准时间。",
            "结构化场指标：发射与接收口径、Fraunhofer距离2D²/λ、链路距离、截获功率、孔径模态纯度、串扰矩阵及偏轴/倾斜容差。",
            "证据边界：版本上传是标准流程信号，不是OAM进入3GPP，也不证明任何实验原型满足TS 38.104。"
          ] },
          { type: "heading", text: "C｜卫星侧IMT-2030框架与评估方法仍在工作文件阶段（中强证据：ITU-R官方文件页，文件2026-06-30，页面2026-07-23更新）" },
          { type: "text", text: "ITU-R WP 4B官方页面列出面向IMT-2030卫星组成部分的框架、技术性能要求、评估方法和提交模板工作文件。当前层级是工作文件，不是已批准建议书。它对阵列研究的需求信号在于：非地面链路必须把波束覆盖、跟踪几何、频谱共存和性能评价方法一起说明，不能把理想同轴静态链路当作全部使用场景。" },
          { type: "list", items: [
            "可测几何：距离与仰角轨迹、指向误差分布、波束切换/跟踪速率、覆盖边缘增益、扫描损耗和极化失配。",
            "抗干扰与共存：在公开、防御性模型下报告干扰功率谱密度、J/S、输出SINR、BER/BLER、零陷深度与宽度、期望信号损失和鲁棒性分位数。",
            "成本与实现：有效孔径、射频通道数、移相/幅控分辨率、整机功耗、热设计、校准频率以及单位覆盖或单位吞吐成本。"
          ] },
          { type: "heading", text: "D｜本期需求翻译" },
          { type: "list", items: [
            "“远距离OAM”应展开为：z/λ、Dt、Da、截获功率、最坏模态串扰、几何容差和相同孔径MIMO基线，而不是只给传播距离。",
            "“鲁棒跟踪”应展开为：d与β的动态范围、估计RMSE、补偿更新时间、训练开销、失锁概率及补偿后的BER/BLER。",
            "“低功耗阵列”应展开为：射频与基带分项功耗、每通道功耗、校准功耗、峰均工作占空比、散热限制和性能退化曲线。"
          ] },
          { type: "sources", items: [
            { label: "3GPP：TS 38.104规格历史，V20.0.0上传记录（2026-07-04）", url: "https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=3202" },
            { label: "ETSI：TS 38.104工作计划，页面更新与实际发布日期可分别核对（页面2026-07-27更新）", url: "https://portal.etsi.org/webapp/WorkProgram/Frame_WorkItemList.asp?SearchPage=TRUE%20%20%20&butExpertSearch=%20%20Search%20%20&includeNonActiveTB=FALSE%20%20%20&optDisplay=ALL%20%20%20&qCURRENT_STATE_CODE=finalized%20%20%20&qINCLUDE_SUB_TB=True%20%20%20&qPROJECT_BOOLEAN=OR%20%20%20&qREPORT_TYPE=SUMMARY%20%20%20&qSORT=HIGHVERSION%20%20%20&qTITLE=TS%2038.104%20%20%20&titleType=all%20%20%20" },
            { label: "ITU-R WP 4B：卫星IMT-2030框架与评估工作文件列表（文件2026-06-30，页面2026-07-23更新）", url: "https://www.itu.int/md/R23-WP4B/new/en" }
          ] }
        ],
        tags: ["3GPP Rel-20", "ITU-R WP 4B", "OTA几何", "证据边界"]
      },
      {
        label: "CST × MATLAB",
        title: "最小任务：画出孔径、偏轴与倾斜的三条代价曲线",
        blocks: [
          { type: "text", text: "目标是在60分钟内用同一份CST复场区分“少收功率”和“模态混合”。沿用已有ℓ=1的8阵元UCA模型，在一个固定z平面导出规则x-y网格复场；若已有多端口结果，可同时导出ℓ=0作为串扰基线。" },
          { type: "list", items: [
            "CST：导出工作频点的共极化复场x、y、Re(E)、Im(E)，网格覆盖至少主环直径的1.5倍；记录频率、z、坐标系、单位和时间约定。",
            "MATLAB基线：以真实涡旋轴为中心，对圆孔径半径R从0.3Rmax扫到Rmax；每个R计算截获功率Pcap和m=−4到4的孔径谱。验证同轴完整圆孔径缩小时，Pcap显著变化而理想数据的非目标模态未必同步上升。",
            "偏轴测试：把圆形接收掩膜中心沿x移动d=0、0.05λ、0.10λ、0.20λ；分析基仍以掩膜中心定义，记录η₁、κoff或最大非目标模态。",
            "倾斜近似：不重新求解，先把场乘以exp[jk(xβx+yβy)]，取βx=0°、1°、2°、5°作为相位坡度敏感性测试；明确这不包含投影孔径和极化变化，只是一级近似。",
            "输出一张三联图：Pcap/Pfull—R曲线、η₁—d/λ曲线、最大串扰—β曲线；附一表记录R、d、β、Pcap、η₁和最大泄漏阶次。"
          ] },
          { type: "formula", text: "Pcap=Σmask|Eᵢ|²ΔA；　cₘ=Σmask Eᵢe^{−jmφᵢ}ΔA；　ηₘ=|cₘ|²/Σq|cq|²" },
          { type: "text", text: "验收检查：改变笛卡尔网格密度或角向采样后，η₁变化应小于1个百分点；掩膜边界不得因插值缺测改变总样点权重；倾斜结果只写“相位坡度敏感性”，待CST旋转接收面或端口模型后再称完整倾斜仿真。" }
        ],
        tags: ["孔径掩膜", "偏轴扫描", "相位坡度", "收敛检查"]
      },
      {
        label: "论文精读",
        title: "Optica 2015：有限孔径和失准如何共同决定链路代价",
        tone: "accent",
        blocks: [
          { type: "text", text: "本期精读Xie等人在Optica发表的《Performance metrics and design considerations for a free-space optical orbital-angular-momentum-multiplexed communication link》（2015年4月8日在线发表，DOI 10.1364/OPTICA.2.000357）。论文研究的是自由空间光链路，但“有限孔径—偏移/倾角—模式串扰—系统功率代价”的指标链对射频OAM接收几何具有直接方法论价值。" },
          { type: "heading", text: "研究问题与方法" },
          { type: "text", text: "作者针对多OAM模态自由空间链路，联合分析发射波束尺寸Dt、接收孔径Da、距离z、横向位移d、接收端角度误差φ和模态间隔。方法包括波束传播仿真、有限孔径积分、模式解复用后的功率/串扰计算，以及部分实验验证。" },
          { type: "heading", text: "主要结果" },
          { type: "list", items: [
            "高阶模式在相同传播条件下通常形成更大的接收光斑，固定Da下更容易出现功率损失；共同接收孔径会让不同模式承受不均衡损耗。",
            "在理想同轴、完整圆形接收孔径下，有限半径主要造成截获功率损失；横向偏移或角度误差造成相位轮廓与接收基失配，才使能量泄漏到邻近模式。",
            "更大的发射波束与接收孔径提高横向偏移容忍度，但可能降低角度误差容忍度；增大模态间隔通常减小串扰，却会增加高阶模式的功率损失，因此不存在单一最优方向。"
          ] },
          { type: "heading", text: "局限与证据边界" },
          { type: "text", text: "论文采用光学高斯/SPP类OAM波束、单极化，并忽略复用器与螺旋相位板的插入损耗。射频UCA的阵元方向图、互耦、离散采样、端口噪声和近场球面波不能直接由其数值结论替代；可迁移的是变量组织、指标链和失准权衡，而不是具体厘米或微弧度阈值。" },
          { type: "heading", text: "可复现价值" },
          { type: "text", text: "先用今天的CST复场复现论文的三类曲线：孔径半径—功率损失、横向偏移—串扰、倾角—功率代价。随后把理想模态投影替换为实际接收UCA端口响应，比较连续孔径积分与离散阵列H矩阵的差异；这一步可直接暴露互耦和嵌入方向图带来的额外失配。" },
          { type: "sources", items: [
            { label: "Optica论文原文PDF：Xie et al., Vol. 2 No. 4, 357–365（2015-04-08）", url: "https://wides.usc.edu/Updated_pdf/Performance%20metrics%20and%20design%20considerations%20for%20a%20free-space%20optical%20orbital-angular-momentum.pdf" },
            { label: "论文DOI：10.1364/OPTICA.2.000357", url: "https://doi.org/10.1364/OPTICA.2.000357" },
            { label: "Tel Aviv University论文记录：作者、期刊、页码与同行评审状态", url: "https://cris.tau.ac.il/en/publications/performance-metrics-and-design-considerations-for-a-free-space-op" }
          ] }
        ],
        tags: ["有限孔径", "横向偏移", "角度误差", "功率代价"]
      },
      {
        label: "术语与思考题",
        title: "区分截获、失配与串扰",
        layout: "wide",
        blocks: [
          { type: "list", items: [
            "Captured power（截获功率）：有限接收孔径内实际收集的功率；它影响输入SNR，但不单独说明模式是否混合。",
            "Aperture window（孔径窗口）：描述空间位置是否被接收以及如何加权的函数W(r,φ)；其角向谱决定窗口诱发的模态耦合。",
            "Lateral displacement（横向偏移）：接收孔径中心与波束/阵列名义轴之间的横向距离d，常用d/λ、d/Da或d/波束半径归一化。",
            "Angular misalignment（角度失准）：收发法向或波束轴之间的夹角β，会引入相位坡度、投影孔径和极化变化。",
            "Off-diagonal energy ratio（非对角能量比）：串扰矩阵中非对角能量占总能量的比例κoff，用于量化固定模态基失去对角性的程度。"
          ] },
          { type: "heading", text: "思考题" },
          { type: "text", text: "发射ℓ=1期望信号和ℓ=0干扰，接收端可选择同轴小圆孔径A或略偏轴的大圆孔径B。A只截获30%的期望功率但模态投影近似对角；B截获80%的期望功率，同时使期望与干扰产生明显模态混合。请从H矩阵与噪声功率出发，推导两者输出SINR的比较条件，并说明为什么只比较η₁或Pcap都无法决定哪种孔径更适合抗干扰接收。" }
        ],
        tags: ["Captured power", "Aperture window", "Misalignment", "研究生思考题"]
      }
    ]
  },
  {
    issue: 3,
    date: "2026-07-31",
    dateLabel: "2026年7月31日 · ISSUE 03",
    updatedAt: "2026-07-31 08:05",
    title: "模态谱与模态纯度：从一圈采样到孔径能量",
    summary: "把OAM模态纯度写成明确的角向傅里叶投影，说明采样半径、有限孔径、坐标原点和功率加权为何会改变结果，并把模态串扰连接到输出SINR与BER。近7日未发现足够可靠的新动态，行业观察扩展至近30日并逐项注明日期与证据等级。",
    readingMinutes: 24,
    modules: [
      {
        label: "今日结论",
        title: "纯度不是场的固有标签，而是测量定义的一部分",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "list", items: [
            "在固定半径r上，复场E(r,φ)可按exp(jmφ)作角向傅里叶展开；目标模态纯度可定义为该圆周上目标阶次功率占比，但它只代表这一条采样圆。",
            "若要描述整个接收孔径，应对各半径的模态系数按面积元rdr积分；只挑主环半径会高估系统可收集的目标模态能量，也无法反映孔径截断。",
            "模态谱依赖坐标原点、极化分量、采样孔径和基函数。横向偏轴、倾斜、互耦、多径或幅相误差都会把目标阶次的能量泄漏到相邻或更远阶次。",
            "对OAM抗干扰接收机，低模态重叠有助于形成可分离子空间，但模态纯度本身不等于抗干扰增益；必须继续报告J/S、期望信号损失、输出SINR、BER和零陷深度。",
            "近7日未发现足够可靠、直接相关的新动态；本期扩展到近30日，采用ITU官方状态页、大学原始发布和论文原文，不把检索摘要当作事实依据。"
          ] }
        ],
        tags: ["模态谱", "模态纯度", "孔径加权", "证据边界"]
      },
      {
        label: "核心理论",
        title: "从角向傅里叶系数到孔径模态纯度",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "text", text: "在垂直于名义传播轴z的观测面上，选定坐标原点与一个复场分量E(r,φ)。对每个固定半径r，方位角φ上的周期函数可以展开为离散角向谐波。m是分析阶次，cₘ(r)是该半径上的复模态系数；若场是理想单一ℓ模态A(r)exp(jℓφ)，则只有m=ℓ一项非零。" },
          { type: "formula", text: "E(r,φ)=Σₘ cₘ(r)e^{jmφ}，　cₘ(r)=(1/2π)∫₀²πE(r,φ)e^{−jmφ}dφ" },
          { type: "heading", text: "圆周纯度与孔径纯度回答不同问题" },
          { type: "text", text: "圆周纯度ηₘ(r)比较同一采样圆上各角向谐波的平方模。它适合检查主环附近的相位结构，却会随r改变。接收天线实际截获的是二维孔径，因此更有物理意义的孔径指标要把|cₘ(r)|²按极坐标面积元rdr累加。若采样网格不是等面积，还需给每个样点正确的数值积分权重。" },
          { type: "formula", text: "ηₘ(r)=|cₘ(r)|²/Σq|cq(r)|²；　ηₘ,ap=∫₀ᴿ|cₘ(r)|²rdr / Σq∫₀ᴿ|cq(r)|²rdr" },
          { type: "text", text: "上式隐含了共同的径向基底与极化定义。严格的全矢量功率应由坡印廷矢量或经校准接收端口的功率给出；直接对某个笛卡尔分量做|E|²积分，是常用但有条件的近似。若不同m具有不同径向包络，单纯的角向谱不能区分径向模式，必要时应采用Laguerre–Gaussian、Bessel或由实际信道奇异向量构成的二维基。" },
          { type: "heading", text: "离散采样、混叠与窗函数" },
          { type: "text", text: "一圈均匀采Nφ个样点时，连续积分变成DFT。m与m+qNφ产生相同离散相位序列，所以无混叠分析区间通常取长度为Nφ的一个整数区间。角向缺测或非均匀采样相当于乘上窗口，会在模态域与窗口谱卷积；此时泄漏不一定来自天线本身，也可能来自测量几何。" },
          { type: "formula", text: "ĉₘ(r)=(1/Nφ)Σₙ₌₀ᴺφ⁻¹E(r,φₙ)e^{−jmφₙ}；　m ≡ m+qNφ" },
          { type: "heading", text: "坐标错配为何产生模态串扰" },
          { type: "text", text: "exp(jℓφ)的正交性要求积分围绕同一轴完成。把分析原点横移Δx、Δy后，新方位角不再是原场的φ；对有限孔径而言，积分域也随之改变，目标能量会分散到多个m。小偏移常先增强邻近阶次，但具体泄漏由径向包络、传播距离和孔径共同决定，不能只用拓扑荷差预测。" }
        ],
        tags: ["cₘ(r)", "ηₘ,ap", "DFT混叠", "坐标错配"]
      },
      {
        label: "课题连接",
        title: "把模态纯度放进OAM抗干扰系统的指标链",
        tone: "accent",
        blocks: [
          { type: "heading", text: "合理结论" },
          { type: "list", items: [
            "若期望信号与干扰在同一校准孔径上的模态向量分别为aₛ和aⱼ，且二者归一化内积较小，则以aₛ为匹配模板时，干扰投影通常较弱；这是子空间可分性，不是拓扑保护。",
            "完整串扰矩阵C比单一纯度更适合系统评价。Cₚq表示发射q模态在接收p投影中的复响应；对角项反映期望通道，非对角项决定模态间泄漏和均衡负担。",
            "模态纯度可作为前端场质量指标，后端性能要通过接收权w连接：阵列或模态域协方差中的干扰功率决定输出SINR，最终再通过调制、编码与信道统计落到BER/BLER。"
          ] },
          { type: "formula", text: "ρsj=|aₛᴴaⱼ|²/(‖aₛ‖²‖aⱼ‖²)；　SINRout=Pₛ|wᴴaₛ|²/[wᴴ(Rⱼ+Rₙ)w]" },
          { type: "heading", text: "成立条件" },
          { type: "text", text: "上述推理要求接收坐标系、频率、极化、采样孔径和幅相标定一致，并且干扰模型只用于防御性接收评估。比较方案时应固定总孔径、总接收功率、射频通道数、CSI质量和算法自由度；否则模态方案可能只是用了更大的孔径或更多观测通道。" },
          { type: "heading", text: "仍待验证或容易过度外推的主张" },
          { type: "text", text: "高目标模态纯度并不保证低外部干扰耦合：一个干扰可以与目标模态高度重叠，也可能从有限孔径之外或交叉极化路径进入。反过来，纯度一般的场仍可能被MVDR、LCMV或联合均衡有效接收。建议论文中同时给出η目标、串扰矩阵、ρsj、J/S—SINRout曲线和BER，而不要用一张相位图替代系统证据。" }
        ],
        tags: ["串扰矩阵C", "模态相关ρ", "输出SINR", "公平基线"]
      },
      {
        label: "行业需求",
        title: "近30日信号：近场评估、分布式孔径与可验证指标",
        layout: "wide",
        tone: "industry",
        priority: "证据分级",
        blocks: [
          { type: "heading", text: "A｜近7日动态核验结果" },
          { type: "text", text: "截至2026年7月31日08:05（北京时间），未发现近7日内同时满足“公开原始来源、发布日期可核对、与阵列/OAM/抗干扰直接相关”的足够新动态。本期不制造热点，观察窗口扩展到近30日；以下资料的事件日期均早于7月24日。" },
          { type: "heading", text: "B｜IMT-2030评估开始显式接纳近场与空间非平稳信道（强证据：ITU官方状态页，状态截至2026年7月）" },
          { type: "text", text: "ITU-R WP 5D官方页面显示，IMT-2030候选无线接口评估指南草案已于2026年6月完成，并提交SG 5计划于2026年12月审批。页面列出的扩展信道模型包含近场与空间非平稳性。它不等于OAM被标准化，但说明只用平面波、远场、平稳阵列响应评价大孔径或结构化场方案，已不足以覆盖未来候选技术的评估语境。" },
          { type: "list", items: [
            "面向相控阵/基站：记录频段与带宽、孔径D、Fraunhofer距离2D²/λ、用户距离、扫描范围、扫描损耗、EIRP、EIS、波束宽度和每通道功耗。",
            "面向OAM/结构化场：除增益外报告接收孔径占比、目标模态孔径纯度、完整串扰矩阵、轴偏移与倾斜容限、不同距离上的谱稳定性。",
            "证据边界：当前页面证明评估框架草案的状态与所含模型类别，不证明任何OAM方案满足IMT-2030最低要求。"
          ] },
          { type: "heading", text: "C｜同步分布式阵列延伸近场波前工程（中强证据：Princeton大学原始发布，2026-07-09）" },
          { type: "text", text: "Princeton ECE于7月9日发布研究进展：多组同步阵列用现成硬件实现分布式近场波前工程，并报告其实验中的有效近场作用距离约为单孔径Fraunhofer距离的六分之一到七分之一。这个比例依赖实验配置，不能当作通用常数；更重要的工程信号是，孔径间同步、相位校准和几何估计已成为近场成形能否成立的核心成本。" },
          { type: "list", items: [
            "可测需求：阵列间时钟/相位误差、位置误差、联合孔径尺寸、有效聚焦距离、焦点半功率体积、旁瓣与非目标区域泄漏、扫描或聚焦更新率。",
            "对课题的推论：OAM模态分析若跨多个分布式孔径，应先统一坐标轴和复相位参考，再计算全局模态谱；分别归一化每个子阵会掩盖相干合成误差。",
            "抗干扰评价：固定J/S与期望信号损失约束，报告输出SINR、零陷深度、零陷角宽、校准漂移下的性能分位数，以及新增同步硬件的功耗和成本。"
          ] },
          { type: "heading", text: "D｜把行业口号翻译成课题指标" },
          { type: "list", items: [
            "“宽带高纯度OAM”应展开为：工作带宽、每频点η目标,ap、最坏串扰、群时延/波束斜视、增益和总效率，并明确分析孔径与基函数。",
            "“高可靠抗干扰”应展开为：干扰集合与J/S范围、输出SINR或SINR增益、BER/BLER、期望信号增益损失、零陷深度、收敛时间及失配鲁棒性。",
            "“低成本可扩展阵列”应展开为：射频通道数、移相/幅控位数、每通道和整机功耗、校准时间、阵元/孔径成本、热设计余量与可制造公差。"
          ] },
          { type: "sources", items: [
            { label: "ITU-R：IMT-2030进展页，评估指南状态截至2026年7月", url: "https://www.itu.int/en/ITU-R/study-groups/rsg5/rwp5d/imt-2030/pages/default.aspx" },
            { label: "ITU-R：IMT-2030候选技术提交与评估流程，状态截至2026年7月", url: "https://www.itu.int/en/ITU-R/study-groups/rsg5/rwp5d/imt-2030/Pages/submission-eval.aspx" },
            { label: "Princeton ECE：Distributed antennas push the limits of high-frequency signals（2026-07-09）", url: "https://ece.princeton.edu/news/distributed-antennas-push-limits-high-frequency-signals" }
          ] }
        ],
        tags: ["IMT-2030", "近场信道", "分布式阵列", "指标翻译"]
      },
      {
        label: "CST × MATLAB",
        title: "最小任务：比较圆周纯度与孔径纯度",
        blocks: [
          { type: "text", text: "目标是在45—60分钟内证明“选一条漂亮的主环”与“统计整个接收孔径”会得到不同答案。沿用昨日ℓ=1的8阵元UCA或已有CST模型，不改天线结构，只规范导出与后处理。" },
          { type: "list", items: [
            "CST：在同一频点导出垂直于传播轴的规则x-y平面复场，优先使用共极化分量；至少覆盖中心到主环外侧，保存x、y、Re(E)、Im(E)、频率、平面z位置与单位。",
            "MATLAB：以涡旋轴为原点，把笛卡尔复场插值到Nr×Nφ极坐标网格；建议Nφ=360，m取−8到8，半径从避免中心插值奇异的首个有效点到R。",
            "圆周分析：逐半径计算ĉₘ(r)与ηₘ(r)，画出m=−3到3的ηₘ随r曲线；记录使η₁最大的半径rbest，避免只报告这个最好值。",
            "孔径分析：用梯形积分计算∫|cₘ(r)|²rdr，分别取R=0.5Rmax、0.75Rmax、Rmax，画ηₘ,ap柱状图；确认分母包含同一m范围并做截断收敛检查。",
            "失配测试：保持场数据不变，把分析原点沿x移动0、0.05λ、0.10λ、0.20λ；同时记录η₁(rbest)、η₁,ap、最强泄漏阶次、接收总功率和ρ与零偏移模板。"
          ] },
          { type: "formula", text: "Cₘ=trapz(r,|cₘ(r)|²·r)；　ηₘ,ap=Cₘ/ΣqCq；　Δη=η₁(rbest)−η₁,ap" },
          { type: "text", text: "验收产物为两图一表：ηₘ(r)曲线、不同R与偏移下的孔径谱柱状图，以及包含原点偏移、R、总截获功率、η₁(rbest)、η₁,ap和最大非目标模态的表格。若增大m截断范围后η₁,ap仍变化超过1个百分点，应先提高角向采样或检查插值与孔径边界。" }
        ],
        tags: ["极坐标插值", "trapz", "孔径积分", "原点偏移"]
      },
      {
        label: "论文精读",
        title: "近场模态组合与抵消：纯度如何随距离改变",
        tone: "accent",
        blocks: [
          { type: "text", text: "本期精读Yu等人在Scientific Reports发表的《Orbital Angular Momentum (OAM) Antennas via Mode Combining and Canceling in Near-field》。论文使用由主、副反射阵列构成的Cassegrain双反射阵天线，研究不同OAM模态在近场传播中如何相干组合或抵消；它直接给出了用角向傅里叶展开定义归一化模态幅度的做法。" },
          { type: "heading", text: "研究问题与方法" },
          { type: "text", text: "问题不是简单生成一个涡旋波束，而是通过两个不同阶次模态的复权叠加，在指定近场位置获得增强或抵消。作者先把远场E(θ,φ)按exp(jmφ)分解为Fₘ(θ)，用目标与非目标系数的比值描述模态纯度，再结合全波仿真和天线结构讨论组合场随距离的变化。" },
          { type: "heading", text: "主要结果与物理解释" },
          { type: "text", text: "不同OAM阶次具有不同的径向/角向场分布和传播演化，因此即使馈入复权固定，两个模态在空间中的相对幅相仍会变化；指定位置的增强或抵消不会自动在所有距离保持。对今天的主线而言，关键启示是模态系数应写成角度、半径或距离的函数，不能把单一截面得到的纯度当作整条链路常数。" },
          { type: "heading", text: "局限与证据边界" },
          { type: "list", items: [
            "论文聚焦天线近场的模态组合/抵消，不是外部干扰场景，因此不能把局部场抵消直接解释为通信零陷深度或BER收益。",
            "归一化模态幅度与功率纯度并非同一指标；复现时应明确是|Fₘ/Fℓ|还是|Fₘ|²/Σ|Fq|²，并注明θ、距离和积分孔径。",
            "双反射阵的结构、馈源照明和离散单元误差会影响谱；理想复权叠加与实物天线之间仍需S参数、效率、加工公差和测量校准闭环。"
          ] },
          { type: "heading", text: "可复现价值" },
          { type: "text", text: "可先跳过复杂反射阵，用MATLAB构造E=aA₀(r,z)+bA₁(r,z)exp(jφ)，让A₀与A₁具有不同的传播相位或衍射尺度；在多个z截面计算c₀、c₁、孔径纯度和某指定点复场。随后再用CST导出的两个独立端口/模态场做线性叠加，验证固定a、b只能在有限空间区域实现预期组合。" },
          { type: "sources", items: [
            { label: "Scientific Reports论文原文：Orbital Angular Momentum (OAM) Antennas via Mode Combining and Canceling in Near-field（2017-10-06）", url: "https://www.nature.com/articles/s41598-017-13125-5" },
            { label: "论文DOI：10.1038/s41598-017-13125-5", url: "https://doi.org/10.1038/s41598-017-13125-5" }
          ] }
        ],
        tags: ["角向展开", "近场组合", "距离依赖", "复现边界"]
      },
      {
        label: "术语与思考题",
        title: "把谱、纯度和串扰放在同一坐标系里",
        layout: "wide",
        blocks: [
          { type: "list", items: [
            "OAM modal spectrum（OAM模态谱）：复场对角向基exp(jmφ)投影后，各阶次复系数或功率的分布；必须附带坐标轴、孔径和极化定义。",
            "Modal purity（模态纯度）：目标模态功率占所统计模态总功率的比例；圆周纯度与二维孔径纯度不可混用。",
            "Modal crosstalk matrix（模态串扰矩阵）：从每个发射模态到每个接收投影的复响应矩阵，对角化程度取决于传播、孔径、校准和基选择。",
            "Aperture truncation（孔径截断）：接收面只截获场分布的一部分，使理想正交积分不完整，并改变功率、模态谱与链路预算。",
            "Basis mismatch（基失配）：分析或接收基与实际信道本征结构不一致；偏轴DFT-OAM接收就是常见例子。"
          ] },
          { type: "heading", text: "思考题" },
          { type: "text", text: "已知期望信号在完整同轴孔径上的η₁,ap=0.90，但接收孔径只覆盖主环的60%，外部干扰在完整孔径上主要是m=0。请构造一个反例，说明截断后η₁,ap仍可能较高而输出SINR却明显下降；然后给出最少需要测量的复场/端口数据，以及用模态匹配、MVDR和SVD三种接收基公平比较时应固定的资源与横纵轴。" }
        ],
        tags: ["Modal spectrum", "Modal purity", "Crosstalk matrix", "Aperture truncation"]
      }
    ]
  },
  {
    issue: 2,
    date: "2026-07-30",
    dateLabel: "2026年7月30日 · ISSUE 02",
    updatedAt: "2026-07-30 08:05",
    title: "螺旋相位与拓扑荷：从绕转数到可测模态",
    summary: "把OAM场的螺旋相位、相位奇点与拓扑荷写成可计算的闭合路径绕转数，区分拓扑判据、模态纯度和系统抗干扰性能，并给出CST复场到MATLAB模态谱的最小验证。近7日无足够可靠的新动态，行业观察扩展至近30日。",
    readingMinutes: 23,
    modules: [
      {
        label: "今日结论",
        title: "拓扑荷回答“绕了几圈”，不回答“链路有多好”",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "list", items: [
            "理想标量OAM模态含有exp(jℓφ)因子；绕传播轴一周，相位净变化2πℓ。整数ℓ是闭合路径上的相位绕转数，也是旋转生成算符−j∂/∂φ的本征值。",
            "相位奇点处相位无定义，连续复场通常必须让振幅趋近于零；但“中心暗区+螺旋相位”只证明局部涡旋结构，不证明场是单一纯模态。",
            "拓扑荷是局部或路径相关的整数判据，模态纯度是选定孔径、坐标原点和基函数下的能量比例；偏轴、有限孔径、互耦与多径会让两者给出不同层面的答案。",
            "对OAM抗干扰系统，拓扑荷可作为结构化特征，真正的收益仍须落到干扰模态重叠、J/S、输出SINR、BER和期望信号增益损失，并与同孔径波束赋形或MIMO方案公平比较。",
            "近7日未发现足够可靠、直接相关的新动态；本期扩大至近30日，所有时效资料均注明发布日期，且把标准记录、同行评审期刊条目和待同行评审预印本分开标注。"
          ] }
        ],
        tags: ["螺旋相位", "拓扑荷", "相位奇点", "证据边界"]
      },
      {
        label: "核心理论",
        title: "从复场单值性理解拓扑荷",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "text", text: "在垂直于名义传播轴z的平面上，用圆柱坐标(r,φ,z)表示窄带复场的某个标量分量或共极化分量。理想OAM模态可写为A(r,z)exp[jℓφ]exp(jkz)，其中A给出径向包络，φ为方位角，ℓ为整数拓扑荷，k=2π/λ。采用不同时间因子约定会改变相位符号，但不会改变“闭合一周的整数绕转”这一几何事实。" },
          { type: "formula", text: "Eℓ(r,φ,z)=A(r,z) exp(jℓφ) exp(jkz)，　Eℓ(φ+2π)=Eℓ(φ) ⇒ ℓ∈ℤ" },
          { type: "heading", text: "闭合路径上的相位绕转数" },
          { type: "text", text: "设ψ=arg(E)为相位，在不穿过零场点的闭合路径C上，拓扑荷等于相位梯度沿路径的环量除以2π。数值计算时不应直接对带跳变的arg(E)求导，而应累加相邻复样点的共轭乘积相位；这样天然把每一小段相位差限制在主值区间。" },
          { type: "formula", text: "ℓC=(1/2π)∮C ∇ψ·dl；　离散式：ℓ̂=(1/2π)Σₙ angle[E*(φₙ)E(φₙ₊₁)]" },
          { type: "text", text: "若路径连续收缩时没有跨过E=0的点，ℓC保持不变；一旦路径跨过相位奇点，绕转数可以改变。对非零ℓ，若轴心场值既有限又非零，则从不同方向逼近轴心会得到不同相位，与连续单值复场矛盾，因此理想模型在轴心形成零场和相位未定义点。" },
          { type: "heading", text: "拓扑荷、OAM本征值与模态纯度不是同一个量" },
          { type: "formula", text: "−j∂Eℓ/∂φ = ℓEℓ；　cₘ(r)=(1/2π)∫₀²π E(r,φ)e^(−jmφ)dφ" },
          { type: "text", text: "第一式说明exp(jℓφ)是角向旋转算符的本征函数；在理想标量、单色、近轴条件下，可把ℓ与轨道角动量本征值联系起来。第二式才是角向模态分解：一般场E=Σₘcₘexp(jmφ)可以含多个m。单条闭合路径可能给出整数绕转，却不能替代完整孔径上的模态谱。对强聚焦、非近轴或矢量场，还需区分自旋角动量、轨道角动量及其耦合，不能把单个标量分量的相位绕转直接等同于总角动量通量。" }
        ],
        tags: ["E=Ae^{jℓφ}", "闭合路径C", "−j∂φ", "角向傅里叶分解"]
      },
      {
        label: "课题连接",
        title: "把拓扑特征放进OAM抗干扰接收机",
        tone: "accent",
        blocks: [
          { type: "heading", text: "合理结论" },
          { type: "list", items: [
            "若期望信号与干扰在同一接收孔径上的角向谱重叠较小，模态匹配滤波或带约束的模态—波束联合权值可以降低干扰泄漏。",
            "拓扑荷估计对连续小扰动可保持整数，但模态功率分配并不具备同样的拓扑保护；幅相误差可能不改变主奇点绕转数，却已明显降低目标模态相关系数和输出SINR。",
            "使用多个同心圆估计ℓC，并同时计算二维孔径模态谱，可把“局部奇点是否存在”与“接收能量是否集中在目标模态”分开诊断。"
          ] },
          { type: "heading", text: "成立所需条件" },
          { type: "text", text: "接收面需要覆盖足够的角向范围并正确确定涡旋轴；采样圆上不能有大量接近噪声底的点，否则相位差会失真。模态滤波还依赖阵列校准、极化一致性、足够阵元数以及对有限孔径和偏轴几何的建模。若干扰与期望信号共享相近空间—模态子空间，仅凭拓扑荷标签无法分离。" },
          { type: "heading", text: "待验证或容易过度外推的主张" },
          { type: "text", text: "“拓扑稳定性等于通信抗干扰鲁棒性”仍不是一般结论。建议在相同孔径、通道数、总接收功率和CSI假设下，比较固定模态投影、MVDR/LCMV和信道SVD方案；横轴至少包含J/S、轴偏移与幅相误差，纵轴同时给出拓扑荷估计成功率、目标模态纯度、输出SINR和BER。这里讨论的是接收端防御性评估，不涉及产生或部署对外干扰。" },
          { type: "formula", text: "ηₘ=|cₘ|²/Σq|cq|²；　SINRout=Ps|wᴴhs|² / [wᴴ(Rj+Rn)w]" }
        ],
        tags: ["局部拓扑", "模态重叠", "J/S", "防御性接收"]
      },
      {
        label: "行业需求",
        title: "近30日信号：标准基线、太赫兹阵列与可编程孔径",
        layout: "wide",
        tone: "industry",
        priority: "证据分级",
        blocks: [
          { type: "heading", text: "A｜3GPP基站射频规范持续更新（强证据：3GPP官方记录，2026-07-03）" },
          { type: "text", text: "3GPP门户显示，NR基站无线发射与接收规范TS 38.104的Release 19版本19.6.0于7月3日上传。该记录证明规范版本更新，不足以单独证明某项天线指标发生改变，也不表示3GPP已采纳OAM。对研究选题更实际的提示是：任何面向基站或阵列接收的方案，都应把结构化场指标映射回可验证的射频与空口基线。" },
          { type: "list", items: [
            "基站/相控阵：记录工作频段与瞬时带宽、扫描范围、扫描损耗、EIRP或增益、旁瓣、EIS/接收灵敏度相关量、误差矢量幅度及每通道功耗；引用具体条款时应固定规范版本。",
            "OAM附加指标：在上述基线之外报告模态串扰矩阵、目标模态纯度、轴偏移容限和接收孔径占比；不能用模态纯度替代链路指标。",
            "证据边界：本期只确认版本与上传日期，没有把19.6.0相对19.5.0的变更内容当作已核实事实。"
          ] },
          { type: "heading", text: "B｜436—472 GHz接收机采用IF波束形成（中强证据：IEEE学会期刊条目，2026-07-13）" },
          { type: "text", text: "IEEE Solid-State Circuits Society于7月13日列出一篇JSSC论文：65 nm CMOS实现的436—472 GHz四阵元IF波束形成相控阵接收机，论文摘要强调用两步混频降低IF波束形成的面积开销、提升太赫兹阵列可扩展性。它不直接验证OAM通信，但反映高频阵列的工程瓶颈已从理想相位权值延伸到混频架构、面积、阵列扩展和天线—芯片协同。" },
          { type: "list", items: [
            "可测需求：36 GHz标称频率跨度内的转换增益、噪声系数、波束扫描范围与损耗、阵列增益、通道幅相一致性、芯片面积和每通道功耗。",
            "对OAM课题的推论（非论文原结论）：若逐阵元高精度相位控制增加RF复杂度，可比较IF/混合波束形成能否以较少高成本通道实现近似模态投影，并量化纯度与功耗的折中。"
          ] },
          { type: "heading", text: "C｜堆叠智能超表面用于近场OAM-HMIMO（中等证据：待同行评审预印本，2026-07-10）" },
          { type: "text", text: "Torcolacci与Dardari的预印本把堆叠智能超表面放在收发两端，用相关性目标优化OAM波前合成与接收。其数值结果把两类资源区分开：孔径/元胞密度主要限制可支持模态与高阶模态质量，层数主要改善串扰抑制但收益会饱和。这是有价值的研究信号，不是商用成熟度或实测性能证明。" },
          { type: "list", items: [
            "结构化场：跟踪孔径尺寸/λ、元胞间距、层数、相位分辨率、插入损耗、模态相关系数、串扰矩阵和距离失配。",
            "高可靠抗干扰：在加入外部干扰后补测J/S—输出SINR曲线、BER、零陷深度、期望信号损失与优化收敛时间；原文重点是模态间干扰和近场复用，不能直接外推为对外部干扰鲁棒。",
            "实现风险：原文数值模型采用单极化标量场、相位-only、无损无源层，并假设元胞不互耦；损耗、量化、互耦、偏轴和实测校准仍是验证缺口。"
          ] },
          { type: "sources", items: [
            { label: "3GPP：TS 38.104版本记录，Rel-19 v19.6.0上传于2026-07-03", url: "https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=2373" },
            { label: "IEEE SSCS：436—472 GHz四阵元IF波束形成接收机条目（2026-07-13）", url: "https://sscs.ieee.org/tag/phased-arrays/" },
            { label: "IEEE DOI：10.1109/JSSC.2026.3710258", url: "https://doi.org/10.1109/JSSC.2026.3710258" },
            { label: "arXiv原文：OAM-Enabled HMIMO with Stacked Intelligent Metasurfaces（2026-07-10）", url: "https://arxiv.org/abs/2607.09479" }
          ] }
        ],
        tags: ["3GPP TS 38.104", "436—472 GHz", "SIM", "指标翻译"]
      },
      {
        label: "CST × MATLAB",
        title: "最小任务：从复场估计拓扑荷和模态谱",
        blocks: [
          { type: "text", text: "目标是在45—60分钟内建立一条可复用的数据链：CST导出某个观察平面的复场，MATLAB同时给出绕转数和角向模态纯度。先使用昨日的8阵元圆阵模型，选择ℓ=1激励；不要只导出相位图。" },
          { type: "list", items: [
            "CST：在距阵面适当位置建立单频E场监视平面，导出同一坐标系下的复数共极化分量或Ex、Ey实部与虚部；记录频率、平面z坐标和相位时间约定。",
            "MATLAB：以估计涡旋轴为中心，在半径r=0.5λ、1.0λ、1.5λ的三个圆上各插值Nφ=360个复场样点；首尾闭合。",
            "绕转数：计算Δψₙ=angle(conj(Eₙ)Eₙ₊₁)，求ℓ̂=ΣΔψₙ/(2π)。若圆上任一点幅度低于该圆峰值的−25 dB，标记该半径结果为低可信而不是强行取整。",
            "模态谱：对m=−4…4计算cₘ=Nφ⁻¹ΣEₙexp(−jmφₙ)，再计算ηₘ=|cₘ|²/Σ|cq|²；比较三个半径上的峰值模态、纯度和非目标泄漏。",
            "扰动验证：把圆心沿x方向故意偏移0.1λ、0.2λ，重复估计；观察主奇点的绕转数何时仍稳定，而η₁和串扰何时已经明显恶化。"
          ] },
          { type: "formula", text: "Δψₙ=angle[conj(Eₙ)Eₙ₊₁]；　cₘ=(1/Nφ)ΣₙEₙexp(−jmφₙ)" },
          { type: "text", text: "验收产物为一张图和一张表：图中画m=−4…4的ηₘ柱状图；表中列出圆心偏移、半径、最小相对幅度、ℓ̂、η₁。若ℓ̂接近1而η₁已下降，这正是“拓扑荷稳定不等于模态纯度稳定”的数值证据。" }
        ],
        tags: ["复场导出", "phase winding", "Nφ=360", "模态谱"]
      },
      {
        label: "论文精读",
        title: "堆叠智能超表面如何合成近场OAM通道",
        tone: "accent",
        blocks: [
          { type: "text", text: "本期精读Torcolacci与Dardari于2026年7月10日提交的arXiv v1。它与今日主题的直接联系在于：优化目标不是只拟合幅度，而是用复相关性保留螺旋相位相关结构，并在离散可编程孔径上检查模态相关性、模态间干扰、SINR和总速率。论文已投稿IEEE，但当前仍是未同行评审预印本。" },
          { type: "heading", text: "研究问题与方法" },
          { type: "text", text: "论文研究辐射近场LOS链路中，收发两端堆叠智能超表面能否用少量有源RF链，在电磁域产生和解复用多个OAM通道。系统以28 GHz、120 MHz带宽、11个数据流为数值基线；每层为离散方形元胞阵列，多个相位-only层级联。作者用理想连续OAM基作为目标，通过多起点梯度下降、Adam更新和分层优化最大化合成场与目标场的归一化复相关。" },
          { type: "formula", text: "ρs=|fₛᴴaₛ|/(‖fₛ‖‖aₛ‖)；　Γ=Σs log₂(1+SINRₛ)" },
          { type: "heading", text: "主要结果" },
          { type: "list", items: [
            "元胞数由400增至1600、3600时，高阶模态相关性与SINR明显改善；小孔径下多数非零模态甚至处于负SINR，说明增加层数不能补偿孔径不足。",
            "层数增加主要改善变换保真度和模态间串扰，但约8层后总速率收益趋于饱和；论文据此区分了“孔径决定可支持空间复杂度”和“层深改善波域处理精度”。",
            "发射端合成误差比接收端非理想造成更大的吞吐损失；固定于一个目标距离优化的相位，在所仿真的距离变化下呈平滑退化。"
          ] },
          { type: "heading", text: "局限与可复现价值" },
          { type: "list", items: [
            "局限：结果来自数值模型；采用LOS、近轴、单极化标量场、无损相位-only超表面和忽略元胞互耦等假设，也没有把外部有意或无意干扰作为主要变量。",
            "比较局限：论文以理想OAM基和部分理想化收发配置作上界，没有完整回答在相同硬件、功耗和CSI预算下，相比最优近场MIMO本征模能否获益。",
            "可复现入口：先不实现完整SIM优化，只复现式中的复相关ρs、模态间信道矩阵和SINR；用CST导出的离散孔径场替代理想fₛ，再扫描孔径、相位量化和偏轴误差。",
            "对课题的下一步：在有效信道中加入一个可控空间协方差Rj，比较相关性目标与直接最大化最差模态SINR的目标，检查模态保真度和抗干扰性能是否一致。"
          ] },
          { type: "sources", items: [
            { label: "arXiv摘要与版本记录：2607.09479v1（提交于2026-07-10）", url: "https://arxiv.org/abs/2607.09479" },
            { label: "arXiv HTML全文：系统模型、算法与数值结果", url: "https://arxiv.org/html/2607.09479" }
          ] }
        ],
        tags: ["预印本", "HMIMO", "复相关目标", "复现边界"]
      },
      {
        label: "术语与思考题",
        title: "区分绕转、奇点与模态纯度",
        layout: "wide",
        blocks: [
          { type: "list", items: [
            "Helical phase front（螺旋相位波前）：相位随方位角连续变化的波前结构，理想因子为exp(jℓφ)。",
            "Topological charge（拓扑荷）：闭合路径上相位净绕转数ℓC，路径不跨越零场点时对连续扰动保持不变。",
            "Phase singularity（相位奇点）：复场振幅为零、相位无法定义的位置；多个正负奇点的总绕转数取决于所选闭合路径。",
            "Mode fidelity / modal purity（模态保真度/模态纯度）：合成场与目标场的相关程度，或目标模态能量在选定模态集合中的比例；依赖孔径、坐标与内积定义。",
            "Inter-modal interference（模态间干扰）：其他复用模态经非对角有效信道泄漏到目标模态检测器的功率，不等同于外部干扰。"
          ] },
          { type: "heading", text: "思考题" },
          { type: "text", text: "一个接收平面上的场由ℓ=+1与ℓ=−1两个分量叠加，幅度比为1:0.8，并叠加小幅复高斯噪声。请判断：以原点为中心、不同半径的闭合路径可能得到哪些绕转数？模态谱是否会随半径变化？设计一个同时利用多半径绕转数、二维模态投影和输出SINR的判决规则，并说明在圆心偏移时哪个量最先失效、为什么。" }
        ],
        tags: ["Topological charge", "Phase singularity", "Mode fidelity", "研究生思考题"]
      }
    ]
  },
  {
    issue: 1,
    date: "2026-07-29",
    dateLabel: "2026年7月29日 · ISSUE 01",
    updatedAt: "2026-07-29 16:05",
    title: "均匀圆阵：从阵列因子到OAM模态",
    summary: "从均匀圆阵的几何相位出发，建立阵列因子、离散角向采样与OAM激励之间的联系，并把模态正交性放回有限孔径、信道矩阵和可测抗干扰指标中审视。",
    readingMinutes: 22,
    modules: [
      {
        label: "今日结论",
        title: "先把OAM看成圆阵上的空间傅里叶基",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "list", items: [
            "均匀圆阵（UCA）的阵列因子由阵元位置引入的传播相位与馈电权值共同决定；OAM激励exp(jℓφₙ)本质上是圆周离散采样点上的第ℓ个空间傅里叶基。",
            "N个等角阵元不能无歧义地区分任意多的拓扑荷：离散序列对ℓ按N周期混叠。增加可用模态数必须同时付出阵元数、孔径、射频通道、互耦和校准成本。",
            "理想同轴、完整圆周接收时，不同角向谐波可正交；有限孔径、偏轴、倾斜、遮挡和多径会破坏该条件。因此“发射相位呈螺旋”不等于链路容量或抗干扰能力自动提升。",
            "对OAM抗干扰课题，最稳妥的系统描述是比较信道矩阵在阵元域与模态域中的结构，并用输出SINR、BER、期望信号增益损失和零陷深度验证，而不是只报告模态纯度。",
            "近7日未发现足够可靠、直接相关的新动态；行业观察扩大到近30日，并明确区分已发表器件结果、仍待批准的标准草案与研究推论。"
          ] }
        ],
        tags: ["UCA", "阵列因子", "空间DFT", "证据边界"]
      },
      {
        label: "核心理论",
        title: "均匀圆阵的阵列因子从哪里来",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "text", text: "令N个相同阵元位于半径a的xy平面圆周上，第n个阵元方位角为φₙ=2πn/N，位置向量rₙ=a[cosφₙ, sinφₙ, 0]。观察方向单位向量u=[sinθcosφ, sinθsinφ, cosθ]，k=2π/λ为自由空间波数，wₙ为包含幅相的复激励。忽略互耦且阵元方向图相同，远场可写成阵元方向图与阵列因子的乘积。" },
          { type: "formula", text: "AF(θ,φ)=Σₙ₌₀ᴺ⁻¹ wₙ exp[jk rₙ·u] = Σₙ wₙ exp{jka sinθ cos(φ−φₙ)}" },
          { type: "text", text: "物理图像是：同一观察点看到各阵元不同的传播路程，馈电相位再对这些几何相位做补偿或强化。式中正负号会随采用exp(jωt)还是exp(−jωt)而改变；真正需要保持一致的是求解器、导出数据和MATLAB重构所用的相位约定。" },
          { type: "heading", text: "把圆阵激励换成角向谐波" },
          { type: "formula", text: "wₙ(ℓ)=N⁻¹ᐟ² exp(jℓφₙ),　ℓ∈ℤ" },
          { type: "text", text: "这组权值在阵元索引n上就是离散傅里叶变换基。由于exp[j(ℓ+qN)φₙ]=exp(jℓφₙ)，拓扑荷相差qN的激励在离散圆阵上完全相同，即出现空间混叠。常用的无歧义索引可取以零为中心的一组N个整数；偶数N时Nyquist边界模态需要单独约定。" },
          { type: "formula", text: "Σₙ exp[j(ℓ−m)φₙ] = Nδ[(ℓ−m) mod N]" },
          { type: "text", text: "在轴向θ=0时，几何传播相位对所有阵元相同，若ℓ不是N的整数倍，则复激励求和为零，形成轴上零点。这解释了理想非零OAM模态的中心暗区，但暗区本身不是OAM的充分判据；普通差波束也能产生轴向零陷。" }
        ],
        tags: ["φₙ", "k=2π/λ", "复权值wₙ", "空间混叠"]
      },
      {
        label: "课题连接",
        title: "OAM抗干扰：哪些结论成立，哪些还要验证",
        tone: "accent",
        blocks: [
          { type: "heading", text: "合理结论" },
          { type: "list", items: [
            "模态变换是酉变换时，阵元域总信号能量不因换到模态域而凭空增加；它的价值在于暴露循环对称信道的结构，便于检测、复用或约束权值。",
            "若期望信号与干扰在角向谱上占据不同模态，模态域滤波可能提高输出SINR；提升来自可分离的空间结构，而不是OAM标签本身。",
            "将阵元域信道H左右乘DFT矩阵，可直接比较传统MIMO奇异模与固定OAM基是否匹配；奇异值和容量比单张相位图更有系统意义。"
          ] },
          { type: "heading", text: "适用条件" },
          { type: "text", text: "上述优势依赖足够的接收孔径、角向采样数、信噪比与校准精度，并通常要求发射/接收圆阵近似同轴、通道具有一定旋转对称性。真实阵元方向图、互耦、极化失配、偏轴和多径都会让固定DFT基不再对角化信道。" },
          { type: "heading", text: "仍待验证的主张" },
          { type: "text", text: "“OAM天然抗干扰”不是普遍结论。至少要给定干扰到达方向、空间相关性、J/S、接收几何和对照算法，并与MVDR/LCMV、MIMO-SVD或常规数字波束赋形在相同孔径、通道数和发射功率下比较。防御性研究只建模接收端抑制，不涉及对外通信干扰的设备或部署方法。" },
          { type: "formula", text: "SINRout = |wᴴhₛ|²Pₛ / [wᴴ(Rⱼ+Rₙ)w]" }
        ],
        tags: ["模态域滤波", "公平对照", "SINRout", "接收端防御"]
      },
      {
        label: "行业需求",
        title: "从标准与器件进展翻译为可测指标",
        layout: "wide",
        tone: "industry",
        priority: "证据分级",
        blocks: [
          { type: "heading", text: "A｜IMT-2030评估开始纳入近场与空间非平稳性（强证据：ITU-R官方进展）" },
          { type: "text", text: "ITU-R WP 5D于2026年6月完成IMT-2030候选无线接口评估指南草案，列出仿真、分析和检查三类评估方法，并扩展近场、空间非平稳和ISAC相关信道模型；文件已提交SG 5，计划于2026年12月审议，因此当前应称“已完成草案”，不能称正式生效标准。对阵列研究的含义是：仅用平面波、远场和理想独立阵元评价大孔径系统已不够。" },
          { type: "list", items: [
            "相控阵/基站天线：报告工作带宽、扫描范围内增益与旁瓣、EIRP、波束指向误差、近场边界以及阵元/子阵功耗。",
            "OAM/结构化场：报告接收孔径占比、同轴与偏轴条件、模态串扰矩阵、模态纯度随距离/频率变化，而不是只报最佳点。",
            "高可靠抗干扰：固定J/S与干扰模型后，报告输出SINR、BER/BLER、零陷深度、期望信号增益损失、收敛时间和失配鲁棒性。"
          ] },
          { type: "heading", text: "B｜300 GHz阵列把天线、封装与波束形成绑在一起（中强证据：IEEE学会期刊条目，2026-07-16）" },
          { type: "text", text: "IEEE Solid-State Circuits Society在7月16日列出一项发表于JSSC的300 GHz二维可扩展4×4相控阵接收机：65 nm CMOS、半波长阵元间距，采用耦合振荡器阵列支持的LO-IF混合波束形成，并配合石英上的孔径耦合天线。它不能直接证明OAM链路优势，但清楚显示亚太赫兹阵列的现实约束是通道扩展、LO分配、天线-芯片接口、面积与功耗共同优化。" },
          { type: "list", items: [
            "建议跟踪：RF/IF带宽、阵列增益、噪声系数、扫描损耗、波束数、每通道功耗、芯片/封装面积与校准开销。",
            "对课题的推论（非来源原结论）：如果OAM实现需要逐阵元独立幅相控制，应把射频复杂度与同孔径常规波束赋形方案一起计入收益比较。"
          ] },
          { type: "sources", items: [
            { label: "ITU-R：IMT-2030进展与2026年6月评估指南草案状态", url: "https://www.itu.int/en/ITU-R/study-groups/rsg5/rwp5d/imt-2030/pages/default.aspx" },
            { label: "ITU-R M.2160：IMT-2030框架与总体目标（2023-11）", url: "https://www.itu.int/rec/R-REC-M.2160-0-202311-I/en" },
            { label: "IEEE SSCS：300 GHz 4×4相控阵接收机条目（2026-07-16）", url: "https://sscs.ieee.org/tag/phased-arrays/" },
            { label: "IEEE JSSC DOI：10.1109/JSSC.2026.3711687", url: "https://doi.org/10.1109/JSSC.2026.3711687" }
          ] }
        ],
        tags: ["IMT-2030", "近场信道", "300 GHz", "功耗与成本"]
      },
      {
        label: "CST × MATLAB",
        title: "最小任务：验证8阵元圆阵的空间混叠",
        blocks: [
          { type: "text", text: "目标是在30—45分钟内把理论式变成一张可检查的曲线。先做理想阵列因子，不必立即建立复杂贴片和馈电网络。" },
          { type: "list", items: [
            "MATLAB：设N=8、a=0.75λ，生成φₙ=2πn/N；分别令ℓ=0、1、2、3、4、5和−3，计算θ∈[0°,90°]、φ∈[0°,360°)上的AF并归一化。",
            "检查一：比较ℓ=5与ℓ=−3的复权值，验证两者逐阵元相同；不要只比较归一化方向图。",
            "检查二：记录各ℓ在θ=0的AF，并画固定θ=30°圆环上的相位随φ变化；观察非零ℓ的轴向零点与角向绕转。",
            "CST：建立8个理想点源或相同离散端口阵元，圆阵半径设为0.75λ；用等幅、相邻相差2πℓ/N的激励分别计算ℓ=1和ℓ=2远场。",
            "导出：在固定频点导出包含幅度与相位（或实部与虚部）的远场切片；MATLAB按同一相位约定重构，并比较主能量角度、轴向零点和归一化复场误差。"
          ] },
          { type: "formula", text: "ε = ‖E_CST/‖E_CST‖₂ − E_AF·e^{jα}/‖E_AF‖₂‖₂，　α取使两者全局相位对齐的值" },
          { type: "text", text: "验收标准不是曲线完全重合，而是能解释差异：理想点源设置、坐标系、极化分量、相位符号、角度采样和全局相位是否一致。把N、a/λ、ℓ和误差ε保存成一行实验记录，为后续加入真实嵌入方向图做基线。" }
        ],
        tags: ["N=8", "a=0.75λ", "ℓ混叠", "复场对齐"]
      },
      {
        label: "论文精读",
        title: "OAM是否提供MIMO之外的新容量？",
        tone: "accent",
        blocks: [
          { type: "text", text: "Edfors与Johansson发表于IEEE Transactions on Antennas and Propagation的论文，是判断射频OAM通信主张时很重要的基准文献。它讨论的不是OAM场是否存在，而是把OAM用于多通道通信时，是否超出传统MIMO信道理论所描述的空间自由度。" },
          { type: "heading", text: "研究问题与方法" },
          { type: "text", text: "作者在自由空间特定阵列配置下建立MIMO信道，以特征模/奇异模视角比较OAM状态。核心方法是从完整信道矩阵出发，而不是预先把每个拓扑荷当作新增的独立物理信道。" },
          { type: "heading", text: "主要结果" },
          { type: "text", text: "论文指出：在其考察的对称自由空间配置中，传统MIMO理论得到的本征模可与OAM状态一致；因此OAM子信道属于MIMO可实现解的子集，并不自动带来额外容量增益。这里的关键词是“在特定阵列与信道条件下”，不能外推为所有结构化电磁场设计都没有工程价值。" },
          { type: "heading", text: "局限与可复现价值" },
          { type: "list", items: [
            "局限：结论针对所建模的自由空间与阵列几何；近场、宽带、多径、硬件约束或带先验结构的估计问题仍需分别研究。",
            "可复现：建立同轴UCA到UCA的复信道矩阵H，比较FᴴHF的非对角能量与H的奇异向量；再加入横向偏移，观察固定OAM/DFT基何时失配。",
            "对课题最有价值的对照：在相同孔径、阵元数、总功率和CSI假设下，比较固定模态滤波、SVD预编码和MVDR/LCMV的输出SINR与BER。"
          ] },
          { type: "formula", text: "H_mode = FᴴHF；若循环对称条件成立，H_mode近似对角；一般情形应以H的SVD为参照。" },
          { type: "sources", items: [
            { label: "Lund University论文记录与作者全文：Edfors & Johansson, IEEE TAP 60(2), 2012", url: "https://portal.research.lu.se/en/publications/is-orbital-angular-momentum-oam-based-radio-communication-an-unex/" },
            { label: "IEEE DOI：10.1109/TAP.2011.2173142", url: "https://doi.org/10.1109/TAP.2011.2173142" }
          ] }
        ],
        tags: ["OAM vs MIMO", "信道本征模", "SVD", "公平比较"]
      },
      {
        label: "术语与思考题",
        title: "把阵列语言和模态语言对齐",
        layout: "wide",
        blocks: [
          { type: "list", items: [
            "Array factor（阵列因子）：只由阵元位置与复激励决定的方向性叠加项；模式相乘成立需相同阵元方向图且常忽略互耦。",
            "Uniform circular array, UCA（均匀圆阵）：阵元沿圆周等角分布的阵列，天然适合表示角向傅里叶模态。",
            "Spatial aliasing（空间混叠）：离散空间采样无法区分某些不同的连续场变化；圆阵上表现为ℓ与ℓ+qN具有相同激励序列。",
            "Embedded element pattern（嵌入阵元方向图）：其余端口按规定负载时，单个阵元的实际辐射响应，包含阵列环境和互耦影响。",
            "Mode crosstalk（模态串扰）：接收后目标模态以外的能量泄漏；应以完整串扰矩阵及其测量几何说明，而非单一纯度百分比。"
          ] },
          { type: "heading", text: "思考题" },
          { type: "text", text: "两个同轴8阵元UCA在理想自由空间中用DFT基收发，H_mode近似对角。现在只把接收圆阵横向移动0.2λ：请从传播距离矩阵H的变化出发，判断固定DFT基、H的奇异向量和各模态输出SINR会如何变化；设计一个量化“失去循环对称性”的指标，并说明它与模态串扰之间应当呈现什么关系。" }
        ],
        tags: ["Array factor", "Spatial aliasing", "Embedded pattern", "研究生思考题"]
      }
    ]
  },
  {
    issue: 0,
    date: "2026-07-28",
    dateLabel: "2026年7月28日 · 启航刊",
    updatedAt: "2026-07-28 20:00",
    title: "学习系统已就绪",
    summary: "这是正式日报开始前的导航页。明天早上8点起，最新一期会自动排在最前面，旧内容保留在“历史期刊”中。",
    readingMinutes: 8,
    modules: [
      {
        label: "学习主线",
        title: "从阵列基础走向OAM抗干扰",
        layout: "wide",
        tone: "accent",
        blocks: [
          { type: "text", text: "后续内容将围绕“电磁场与阵列基础 → 涡旋电磁场与OAM → 干扰与信道模型 → 抗干扰指标 → CST/MATLAB联合验证 → 行业需求”推进。每日只深入一个核心问题，避免热点信息碎片化。" },
          { type: "list", items: [
            "理论：OAM模态、螺旋相位、阵列因子、模态纯度、模式正交性与传播特性。",
            "系统：干扰建模、模式检测、波束/模态联合设计、SINR与误码率。",
            "工程：阵列离散化、互耦、加工误差、馈电网络、近远场测量和模态分解。",
            "需求：相控阵、基站天线及公开抗干扰通信方向的指标、产品与人才需求。"
          ] }
        ],
        tags: ["OAM", "阵列天线", "抗干扰通信", "研究生学习"]
      },
      {
        label: "核心概念",
        title: "OAM最重要的第一幅图像",
        tone: "accent",
        blocks: [
          { type: "text", text: "理想OAM波束的横截面相位随方位角连续旋转。整数ℓ称为拓扑荷；绕传播轴一周，相位累计变化2πℓ。ℓ不等于普通意义上的“多出一个频率”，而是空间场结构的模式索引。" },
          { type: "formula", text: "E(r, φ, z) ∝ A(r, z) · exp(jℓφ)" },
          { type: "text", text: "真实天线系统还必须同时检查幅度空心、相位奇点、模态纯度、有限孔径和接收几何条件，不能只凭一张螺旋相位图判断性能。" }
        ],
        tags: ["拓扑荷 ℓ", "螺旋相位", "模态纯度"]
      },
      {
        label: "需求地图",
        title: "把“抗干扰”翻译成指标",
        tone: "industry",
        priority: "持续观察",
        blocks: [
          { type: "text", text: "行业表述常写成强抗干扰、复杂电磁环境适应或高可靠链路。科研中应进一步落到可比较指标。" },
          { type: "list", items: [
            "输入侧：干扰类型、干信比J/S、到达角、带宽、数量与动态变化速度。",
            "输出侧：输出SINR提升、误码率、零陷深度、期望信号增益损失和收敛时间。",
            "硬件侧：阵元数量、射频通道数、孔径、功耗、带宽以及幅相控制精度。"
          ] }
        ],
        tags: ["J/S", "SINR", "BER", "零陷深度"]
      },
      {
        label: "工具链",
        title: "CST与MATLAB如何分工",
        blocks: [
          { type: "list", items: [
            "CST：建立辐射单元和阵列模型，获取S参数、嵌入方向图、近远场和相位分布。",
            "MATLAB：完成OAM场合成、模态谱分析、信道与干扰建模、权值优化及性能统计。",
            "联合验证：用CST真实方向图替代理想阵元模型，观察互耦和误差如何破坏模态纯度与抗干扰性能。"
          ] }
        ],
        tags: ["CST", "MATLAB", "联合仿真"]
      },
      {
        label: "阅读方法",
        title: "每天如何使用这份简报",
        blocks: [
          { type: "list", items: [
            "先读“今日结论”和“行业需求”，判断主题价值。",
            "再推导核心公式，确保知道各变量的物理意义。",
            "最后完成一个思考题或最小仿真，不追求一次做完复杂系统。",
            "遇到与课题高度相关的论文，保存问题、方法、结果、局限四项笔记。"
          ] }
        ],
        tags: ["问题驱动", "最小验证", "论文笔记"]
      },
      {
        label: "明日预告",
        title: "第一期：OAM到底带来了什么空间自由度？",
        layout: "wide",
        tone: "industry",
        blocks: [
          { type: "text", text: "第一期将区分OAM模态、传统波束赋形与MIMO空间自由度，解释“模式正交”成立所需的传播和接收条件，并给出一个可在MATLAB中复现的均匀圆阵相位模型。" },
          { type: "heading", text: "预习问题" },
          { type: "text", text: "如果接收阵列只覆盖OAM波束横截面的一小部分，它还能完整区分不同拓扑荷吗？请先凭物理直觉写下答案。" }
        ],
        tags: ["空间自由度", "均匀圆阵", "模式检测"]
      }
    ]
  }
];
