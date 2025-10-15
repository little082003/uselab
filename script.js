document.addEventListener('DOMContentLoaded', () => {

    const labTopics = [
        {
            id: 'ppe',
            modalTitle: '👕 แว่นตาและเสื้อคลุมปฏิบัติการ',
            modalBody: `
                <p>การสวมใส่ <strong>PPE (Personal Protective Equipment)</strong> เป็นด่านแรกของการป้องกันตนเอง:</p>
                <ul>
                 <div class="ppe-grid-container">
                    <div class="ppe-card-modal">
                        <img src="image/PPE.jpg" alt="PPE">
                        <p class="ppe-title">Personal Protective Equipment(PPE)</p>
                         <p1><strong>1.เสื้อกาวน์</strong> </p1>
                         <p1><strong>2.ถุงมือ</strong></p1>
                         <p1><strong>3.แว่นตานิรภัย</strong></p1>
                         <p1><strong>4.หน้ากากอนามัย</strong></p1>
                         <p1><strong>5.รองเท้าแล็บ</strong></p1>
                         <p1><strong>6.หมวกคุมผม</strong></p1>
                    </div>
                 </div>
                </ul>
                <p><strong>❌ ข้อควรระวัง:</strong> ห้ามสวมรองเท้าแตะ และมัดผมให้เรียบร้อย!</p>`
        },
        {
            id: 'corrosive',
            modalTitle: '⚠️ กรดและด่างเข้มข้น (Corrosive Agents)',
            modalBody: `
                <p>สารประเภทนี้มีฤทธิ์<strong>กัดกร่อนเนื้อเยื่อ</strong>ได้รุนแรง เช่น <strong>กรดซัลฟิวริก (H₂SO₄).</strong></p>
                <ol>
                <div class="corrosive-grid-container">
                    <div class="corrosive-card-modal">
                        <img src="image/laboratory.jpg" alt="corrosive">
                        <p class="corrosive-title">หลักความปลอดภัยสำคัญ</p>
                         <li><strong>การเจือจาง:</strong> ให้เติม <strong>กรดลงในน้ำ</strong> เสมอ อย่างช้า ๆ.</li>
                         <li><strong>การถ่ายเท:</strong> ต้องทำใน <strong>ตู้ดูดควัน (Fume Hood)</strong> เท่านั้น.</li>
                    </div>
                 </div>

                </ol>
            `
        },
        // เพิ่มข้อมูลสำหรับสัญลักษณ์สารเคมีที่นี่
        {
            id: 'Chemical',
            modalTitle: 'สัญลักษณ์ความเป็นอันตรายของสารเคมี (GHS)',
            modalBody: `
                <div class="symbol-grid-container">
                    <div class="symbol-card-modal">
                        <img src="image/Flammable.jpg" alt="สารไวไฟ">
                        <p class="symbol-title">สารไวไฟ (Flammable)</p>
                        <p>ของแข็ง ของเหลว หรือแก๊สที่สามารถลุกติดไฟได้ง่าย</p>
                    </div>
                    <div class="symbol-card-modal">
                        <img src="image/Fatal_Toxic.jpg" alt="อันตรายถึงชีวิต">
                        <p class="symbol-title">อันตรายถึงชีวิต (Fatal/Toxic)</p>
                        <p>สารที่เป็นพิษเฉียบพลัน อาจทำให้เสียชีวิตได้หากสัมผัส</p>
                    </div>
                    <div class="symbol-card-modal">
                        <img src="image/Corrosive.jpg" alt="สารกัดกร่อน">
                        <p class="symbol-title">สารกัดกร่อน (Corrosive)</p>
                        <p>สามารถทำลายเนื้อเยื่อและกัดกร่อนโลหะได้รุนแรง</p>
                    </div>
                     <div class="symbol-card-modal">
                        <img src="image/Irritant.jpg" alt="สารระคายเคือง">
                        <p class="symbol-title">สารระคายเคือง (Irritant)</p>
                        <p>ทำให้เกิดการระคายเคืองต่อผิวหนัง ดวงตา และระบบทางเดินหายใจ</p>
                    </div>
                </div>
            `
        }
    ];

    // ----- ส่วนของการจัดการ Modal (Popup Logic) -----
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");
    const closeBtn = document.getElementsByClassName("close-btn")[0];

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            const topicId = this.getAttribute('data-topic');
            const topicData = labTopics.find(t => t.id === topicId);

            if (topicData) {
                modalTitle.innerHTML = topicData.modalTitle;
                modalBody.innerHTML = topicData.modalBody;
                modal.style.display = "block";
            }
        });
    });

    closeBtn.onclick = function() { modal.style.display = "none"; }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});