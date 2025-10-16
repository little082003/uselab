document.addEventListener('DOMContentLoaded', () => {

    const labTopics = [
        {
            id: 'ppe',
            modalTitle: '👕 ชุดป้องกันภัยส่วนบุคคล (PPE)',
            modalBody: `
                <div class="modal-grid-container">
                    <div class="modal-card">
                        <img src="image/PPE.jpg" alt="PPE">
                        <p class="modal-card-title">อุปกรณ์ที่จำเป็น</p>
                        <ul style="text-align: left; padding-left: 20px; margin-top: 10px;">
                            <li>เสื้อกาวน์</li>
                            <li>ถุงมือ</li>
                            <li>แว่นตานิรภัย</li>
                            <li>หน้ากากอนามัย</li>
                            <li>รองเท้าแล็บ</li>
                            <li>หมวกคลุมผม</li>
                        </ul>
                    </div>
                    <div class="modal-card">
                        <h3>ข้อควรระวัง ❌</h3>
                        <p>ห้ามสวมรองเท้าแตะ, ควรสวมกางเกงขายาวเสมอ, และหากผมยาวควรมัดให้เรียบร้อยเพื่อป้องกันอุบัติเหตุ</p>
                    </div>
                </div>`
        },
        {
            id: 'corrosive',
            modalTitle: '⚠️ กรดและด่างเข้มข้น (Corrosive Agents)',
            modalBody: `
                <p>สารประเภทนี้มีฤทธิ์<strong>กัดกร่อนเนื้อเยื่อ</strong>ได้รุนแรง เช่น <strong>กรดซัลฟิวริก (H₂SO₄).</strong></p>
                <div class="modal-grid-container">
                    <div class="modal-card">
                        <img src="image/laboratory.jpg" alt="corrosive">
                        <p class="modal-card-title">หลักความปลอดภัยสำคัญ</p>
                         <ol style="text-align: left; padding-left: 20px; margin-top: 10px;">
                            <li><strong>การเจือจาง:</strong> ให้เติม <strong>กรดลงในน้ำ</strong> เสมอ อย่างช้า ๆ.</li>
                            <li><strong>การถ่ายเท:</strong> ต้องทำใน <strong>ตู้ดูดควัน (Fume Hood)</strong> เท่านั้น.</li>
                         </ol>
                    </div>
                </div>`
        },
        {
            id: 'Chemical',
            modalTitle: 'สัญลักษณ์ความเป็นอันตรายของสารเคมี (GHS)',
            modalBody: `
                <div class="modal-grid-container">
                    <div class="modal-card">
                        <img src="image/Flammable.jpg" alt="สารไวไฟ">
                        <p class="modal-card-title">สารไวไฟ (Flammable)</p>
                        <p>ของแข็ง ของเหลว หรือแก๊สที่สามารถลุกติดไฟได้ง่าย</p>
                    </div>
                    <div class="modal-card">
                        <img src="image/Fatal_Toxic.jpg" alt="อันตรายถึงชีวิต">
                        <p class="modal-card-title">อันตรายถึงชีวิต (Fatal/Toxic)</p>
                        <p>สารที่เป็นพิษเฉียบพลัน อาจทำให้เสียชีวิตได้หากสัมผัส</p>
                    </div>
                    <div class="modal-card">
                        <img src="image/Corrosive.jpg" alt="สารกัดกร่อน">
                        <p class="modal-card-title">สารกัดกร่อน (Corrosive)</p>
                        <p>สามารถทำลายเนื้อเยื่อและกัดกร่อนโลหะได้รุนแรง</p>
                    </div>
                    <div class="modal-card">
                        <img src="image/Irritant.jpg" alt="สารระคายเคือง">
                        <p class="modal-card-title">สารระคายเคือง (Irritant)</p>
                        <p>ทำให้เกิดการระคายเคืองต่อผิวหนัง ดวงตา และระบบทางเดินหายใจ</p>
                    </div>
                </div>`
        }
    ];

    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");
    const closeBtn = document.querySelector("#myModal .close-btn");

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            const topicId = this.getAttribute('data-topic');
            const topicData = labTopics.find(t => t.id === topicId);

            if (topicData) {
                modalTitle.innerHTML = topicData.modalTitle;
                modalBody.innerHTML = topicData.modalBody;
                modal.classList.add('show');
            }
        });
    });

    const closeModal = () => {
        modal.classList.remove('show');
    }

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });
});