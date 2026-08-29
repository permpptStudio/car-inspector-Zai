/* ============================================================
   translations.js — ไฟล์ข้อความทั้งหมดของโปรแกรม (แก้ที่นี่ได้เลย)
   ------------------------------------------------------------
   • แก้เฉพาะข้อความ "ระหว่างเครื่องหมายคำพูด '...' " ครับ
   • ห้ามลบ/เพิ่มเครื่องหมาย   '  ,  :  {  }  [  ]  ( )
   • en = อังกฤษ / th = ไทย — แก้ฝั่งไหนก็ได้ หรือทั้งสองฝั่ง
   • รหัสอะไหล่ (เช่น 'BRK-DSC-042') ห้ามแก้ — ใช้เชื่อมกับโมเดล 3D
   • ui.ticker เป็นฟังก์ชันพิมพ์ทีละตัวอักษร — แก้เฉพาะข้อความข้างใน
   แก้เสร็จบันทึกไฟล์ แล้วกด F5 ในเบราว์เซอร์ = เปลี่ยนทันที
   (ไฟล์นี้ต้องวางอยู่ข้างกับไฟล์ index.html / car-inspector.html เสมอ)
   ============================================================ */

window.APP_LANG = {

  /* ---------- ข้อความหน้าจอ (ปุ่ม / ป้าย / คำเตือน) ---------- */
  ui: {
    en: {
      brand: 'JARVIS // Automotive Diagnostic Interface',
      sysTime: 'SYS.TIME',
      hint: 'Click part to analyze · [X] explode · [G] x-ray · [S] snapshot · [R] reset · [C] section · [Esc] close',
      btnBg: 'Background Color', btnExplode: 'Explode View', btnAssemble: 'Assemble View',
      btnXray: 'X-Ray Mode', btnShot: 'Snapshot', btnRotate: 'Auto Rotate', btnReset: 'Reset Camera',
      bgTitle: 'Background', panelTag: 'Component Analysis',
      wear: 'Wear Level', temp: 'Temperature',
      navTitle: 'Component Index', search: 'SEARCH...',
      diveTag: 'Deep Dive // Exploded', diveHint: 'Press [X] explode to reveal internals',
      analyzing: 'ANALYZING', xrayOn: 'X-RAY MODE ONLINE', xrayOff: 'X-RAY MODE OFFLINE', saved: 'SNAPSHOT SAVED',
      langToast: 'LANGUAGE // ENGLISH', subTag: 'SUB-COMPONENT',
      btnSound: 'Sound FX', btnSection: 'Section Cut',
      secOn: 'SECTION CUT ONLINE', secOff: 'SECTION CUT OFFLINE',
      ticker: (id, anomaly) => [
        '> SCANNING ' + id + '...',
        '> ULTRASONIC PROBE ......... OK',
        '> THERMAL MAP ACQUIRED ..... OK',
        '> MICRO-FRACTURE DETECTION . ' + (anomaly ? '1 ANOMALY' : 'CLEAN'),
        '> DIAGNOSTIC COMPLETE.',
      ],
    },
    th: {
      brand: 'JARVIS // ระบบตรวจสภาพอะไหล่รถยนต์',
      sysTime: 'เวลาระบบ',
      hint: 'คลิกอะไหล่เพื่อตรวจสภาพ · [X] แยกชิ้น · [G] เอกซเรย์ · [S] ถ่ายภาพ · [R] รีเซ็ตกล้อง · [C] หน้าตัด · [Esc] ปิด',
      btnBg: 'สีพื้นหลัง', btnExplode: 'แยกชิ้นส่วน', btnAssemble: 'ประกอบชิ้นส่วน',
      btnXray: 'โหมดเอกซเรย์', btnShot: 'บันทึกภาพ', btnRotate: 'หมุนอัตโนมัติ', btnReset: 'รีเซ็ตกล้อง',
      bgTitle: 'พื้นหลัง', panelTag: 'ผลตรวจสภาพอะไหล่',
      wear: 'ระดับความสึก', temp: 'อุณหภูมิ',
      navTitle: 'รายการอะไหล่', search: 'ค้นหา...',
      diveTag: 'เจาะลึก // โหมดแยกชิ้น', diveHint: 'กด [X] แยกชิ้นส่วนเพื่อดูชิ้นภายใน',
      analyzing: 'กำลังตรวจสภาพ', xrayOn: 'โหมดเอกซเรย์ เปิดใช้งาน', xrayOff: 'โหมดเอกซเรย์ ปิดแล้ว', saved: 'บันทึกภาพแล้ว',
      langToast: 'ภาษา // ไทย', subTag: 'อะไหล่รอง',
      btnSound: 'เสียงเอฟเฟกต์', btnSection: 'หน้าตัดชิ้นงาน',
      secOn: 'โหมดหน้าตัด เปิดใช้งาน', secOff: 'โหมดหน้าตัด ปิดแล้ว',
      ticker: (id, anomaly) => [
        '> กำลังสแกน ' + id + ' ...',
        '> ส่งคลื่นอัลตราโซนิก ....... ผ่าน',
        '> วัดความร้อนของชิ้น ....... ปกติ',
        '> เช็กรอยแตก/รอยบาก ........ ' + (anomaly ? 'พบ 1 จุด' : 'ไม่พบ'),
        '> ตรวจเสร็จ พร้อมรายงานผล',
      ],
    },
  },

  /* ---------- ข้อมูลอะไหล่ทั้งหมด ----------
     name   = ชื่อหลัก        sub    = ชื่อรอง (สแลงช่าง)
     status = สถานะ + สี      specs  = รายการสเปก [คู่ key, value]
     detail = คำอธิบายชิ้นย่อยตอนแยกชิ้นส่วน (เรียงตามลำดับชิ้นในโมเดล) */
  parts: {

    'BRK-DSC-042': {  // จานเบรก
      name: { en: 'Brake Disc', th: 'จานเบรก' },
      sub:  { en: 'Shop slang: "The Disc"', th: 'ช่างเรียกว่า "ดิสเบรก"' },
      status: { label: { en: 'Nominal', th: 'ปกติ' }, color: 'var(--ok)' },
      specs: [
        [{ en: 'Material', th: 'วัสดุ' }, { en: 'Carbon-Ceramic Composite', th: 'คาร์บอน-เซรามิกคอมโพสิต' }],
        [{ en: 'Diameter', th: 'เส้นผ่านศูนย์กลาง' }, '380 mm'],
        [{ en: 'Thickness', th: 'ความหนา' }, '34 mm'],
        [{ en: 'Slots', th: 'ร่องสล็อต' }, { en: '48 / Curved J-hook', th: '48 ร่องโค้ง J-hook' }],
        [{ en: 'Torque Rating', th: 'แรงบิด (ออกแบบ)' }, '1,850 N·m'],
      ],
      detail: [
        { label: { en: 'Rotor + vanes', th: 'หน้าจาน + ครีบระบาย' },
          desc: { en: 'Two friction discs with 28 air vanes between them — heat escapes through the core while braking.', th: 'จานเสียดทาน 2 แผ่น มีครีบระบายอากาศ 28 ครีบคั่น ความร้อนถ่ายออกทางแกนกลางขณะเบรก' } },
        { label: { en: 'Center hat', th: 'จานกลาง (แฮท)' },
          desc: { en: 'Mounting bell bolted to the wheel hub — carries braking torque through all 5 studs.', th: 'ส่วนยึดเข้ากับฮับล้อ รับแรงบิดจากเบรกผ่านสตั๊ดทั้ง 5 ตัว' } },
        { label: { en: 'Lug bolts', th: 'น็อตยึดจานล้อ' },
          desc: { en: 'Clamp rotor and wheel to the hub — always torque to spec, over-tightening warps the disc.', th: 'ยึดจานและล้อเข้ากับฮับ ขันแรงบิดตามสเปกเสมอ ขันแน่นเกินไปทำให้จานบิดคดได้' } },
      ],
    },

    'CAL-6P-118': {  // กาลิเปอร์ (ก้ามปูเบรก)
      name: { en: 'Brake Caliper', th: 'กาลิเปอร์' },
      sub:  { en: 'Shop slang: "Crab Claw"', th: 'ช่างเรียกว่า "ก้ามปูเบรก"' },
      status: { label: { en: 'Monitor', th: 'ควรเฝ้าดู' }, color: 'var(--warn)' },
      specs: [
        [{ en: 'Material', th: 'วัสดุ' }, { en: 'Forged Aluminium Alloy', th: 'อะลูมิเนียมตีขึ้นรูป' }],
        [{ en: 'Pistons', th: 'ลูกสูบเบรก' }, { en: '6 / Monoblock', th: '6 ลูก / โมโนบล็อก' }],
        [{ en: 'Pad Compound', th: 'เนื้อผ้าเบรก' }, { en: 'Semi-Metallic S3', th: 'กึ่งโลหะ S3' }],
        [{ en: 'Clamp Force', th: 'แรงหนีบ' }, '48 kN'],
        [{ en: 'Brake Line', th: 'สายเบรก' }, { en: 'Stainless Braided', th: 'สแตนเลสหุ้มถัก' }],
      ],
      detail: [
        { label: { en: 'Monoblock body', th: 'ตัวกาลิเปอร์' },
          desc: { en: 'One-piece forged arc housing all six pistons — stiff structure gives even clamping force.', th: 'ก้ามอะลูมิเนียมตีขึ้นรูปชิ้นเดียว ครอบลูกสูบทั้ง 6 แข็งแรง แรงหนีบกระจายสม่ำเสมอ' } },
        { label: { en: 'Brake pads', th: 'ผ้าเบรก' },
          desc: { en: 'Semi-metallic friction pads squeezed against both rotor faces — check thickness every 20,000 km.', th: 'ผ้ากึ่งโลหะหนีบหน้าจานทั้งสองข้าง เช็กความหนาทุก 20,000 กม. เหลือ 2 มม. เปลี่ยนทันที' } },
        { label: { en: '6 pistons', th: 'ลูกสูบเบรก 6 ลูก' },
          desc: { en: 'Brake fluid pressure pushes them out; six pistons spread clamping force smoothly across the pad.', th: 'น้ำมันเบรกดันลูกสูบออกมาหนีบผ้า 6 ลูกช่วยกระจายแรงทั่วผ้า เบรกนุ่มและคมกว่าลูกสูบเดี่ยว' } },
      ],
    },

    'ENG-V6-330': {  // บล็อกเครื่อง V6
      name: { en: 'V6 Engine Block', th: 'บล็อกเครื่อง V6' },
      sub:  { en: 'Shop slang: "The Block"', th: 'ช่างเรียกว่า "เสื้อสูบ"' },
      status: { label: { en: 'Nominal', th: 'ปกติ' }, color: 'var(--ok)' },
      specs: [
        [{ en: 'Material', th: 'วัสดุ' }, { en: 'Cast Aluminium LSA', th: 'อะลูมิเนียมหล่อ LSA' }],
        [{ en: 'Displacement', th: 'ความจุเครื่อง' }, { en: '3.0 L / V6 60°', th: '3,000 ซีซี / V6 60°' }],
        [{ en: 'Redline', th: 'รอบสูงสุด' }, '7,200 RPM'],
        [{ en: 'Compression', th: 'อัตราส่วนการอัด' }, '11.3 : 1'],
        [{ en: 'Output', th: 'กำลังขับ' }, { en: '355 HP / 380 N·m', th: '355 แรงม้า / 380 นิวตันเมตร' }],
      ],
      detail: [
        { label: { en: 'Cylinder block', th: 'เสื้อสูบ' },
          desc: { en: 'Cast aluminium core with six V-arranged bores — combustion power is born here.', th: 'เสื้อสูบอะลูมิเนียมหล่อ กระบอกสูบ 6 ช่องเรียงตัว V เผาไหม้สร้างกำลังภายในนี้' } },
        { label: { en: 'Oil pan', th: 'อ่างน้ำมันเครื่อง' },
          desc: { en: 'Oil reservoir under the block — the pump feeds it to every moving part; keep the level in check.', th: 'อ่างเก็บน้ำมันเครื่องใต้บล็อก ปั๊มส่งไปหล่อลื่นทุกชิ้นส่วน เช็กระดับน้ำมันสม่ำเสมอ' } },
        { label: { en: 'Valve cover — bank A', th: 'ฝาวาล์วฝั่ง A' },
          desc: { en: 'Carbon lid sealing bank A valvetrain, with 4 ignition coils delivering spark on top.', th: 'ฝาครอบคาร์บอนฝั่ง A พร้อมคอยล์จุดระเบิดส่งประกายไฟลงหัวเทียน' } },
        { label: { en: 'Valve cover — bank B', th: 'ฝาวาล์วฝั่ง B' },
          desc: { en: 'Mirror of bank A — together the two banks form the 60° V6 layout.', th: 'ฝั่ง B รูปแบบเดียวกัน สองฝั่งรวมกันเป็นเครื่อง V6 มุม 60 องศา' } },
        { label: { en: 'Intake plenum + runners', th: 'ท่อรวมไอดี + ท่อแยกไอดี' },
          desc: { en: 'Collects filtered air and splits it into six tuned tubes, one per cylinder.', th: 'รวมอากาศจากกรองอากาศ แล้วแยกเข้าท่อ 6 ท่อ ท่อละกระบอกสูบ' } },
        { label: { en: 'Crank pulley', th: 'มู่เล่ย์เพลาข้อเหวี่ยง' },
          desc: { en: 'Belt-drive end of the crankshaft — spins the alternator, A/C and water pump.', th: 'ปลายเพลาข้อเหวี่ยงด้านสายพาน ส่งแรงหมุนไปไดชาร์จ คอมแอร์ และปั๊มน้ำ' } },
      ],
    },

    'WHL-19X-9.5': {  // ล้อแม็ก
      name: { en: 'Performance Wheel', th: 'ล้อแม็ก' },
      sub:  { en: 'Shop slang: "Dress-up Part"', th: 'ช่างเรียกว่า "ล้อแต่ง"' },
      status: { label: { en: 'Critical', th: 'ต้องเปลี่ยนด่วน' }, color: 'var(--danger)' },
      specs: [
        [{ en: 'Material', th: 'วัสดุ' }, { en: 'Flow-Formed Alloy', th: 'อลูมิเนียมอัลลอยรีดขึ้นรูป' }],
        [{ en: 'Size', th: 'ขนาด' }, '19" × 9.5J'],
        [{ en: 'Offset', th: 'ออฟเซ็ต' }, 'ET35'],
        [{ en: 'Tire', th: 'ยาง' }, { en: '275/35 R19 (Soft Compound)', th: '275/35 R19 (เนื้อยางนุ่ม)' }],
        [{ en: 'Weight', th: 'น้ำหนัก' }, '10.8 kg'],
      ],
      detail: [
        { label: { en: 'Tire', th: 'ยาง' },
          desc: { en: 'The only part touching the road — soft compound grips harder but wears faster.', th: 'ชิ้นเดียวที่แตะพื้นถนน เนื้อยางนุ่มเกาะถนนเยี่ยมแต่สึกไว อัดลมตามสเปก 33-35 psi' } },
        { label: { en: 'Alloy rim', th: 'วงแม็ก' },
          desc: { en: 'Flow-formed barrel with twin spokes — light weight and channels air over the brake disc.', th: 'แม็กอัลลอยรีดขึ้นรูป ก้านคู่ น้ำหนักเบา และช่วยพัดลมไประบายความร้อนจานเบรก' } },
      ],
    },

    'HUB-5X-114': {  // ฮับล้อ
      name: { en: 'Wheel Hub', th: 'ดุมล้อ' },
      sub:  { en: 'Shop slang: "The Flange"', th: 'ช่างเรียกว่า "จานยึดล้อ"' },
      status: { label: { en: 'Nominal', th: 'ปกติ' }, color: 'var(--ok)' },
      specs: [
        [{ en: 'Material', th: 'วัสดุ' }, { en: 'Cast Steel', th: 'เหล็กหล่อ' }],
        [{ en: 'Wheel Studs', th: 'สตั๊ดยึดล้อ' }, { en: '5 × M14×1.5', th: '5 ตัว เกลียว M14×1.5' }],
        [{ en: 'Bolt Pattern', th: 'ระยะรูน็อต (PCD)' }, '5 × 114.3 mm'],
        [{ en: 'ABS Ring', th: 'วงแหวน ABS' }, { en: '48 Teeth', th: '48 ฟัน' }],
        [{ en: 'Nut Torque', th: 'แรงบิดน็อตล้อ' }, '130 N·m'],
      ],
      detail: [
        { label: { en: 'Flange + studs + ABS ring', th: 'หน้าแปลน + สตั๊ด + วงแหวน ABS' },
          desc: { en: 'Five studs clamp the wheel; the 48-tooth ring spins past the ABS sensor so the ECU reads wheel speed.', th: 'สตั๊ด 5 ตัวยึดล้อ วงแหวน 48 ฟันหมุนผ่านเซ็นเซอร์ ABS ให้ ECU รู้ความเร็วล้อเพื่อคุมเบรกไม่ให้ล้อล็อก' } },
      ],
    },

    'BRG-TAP-35': {  // ลูกปืนล้อ
      name: { en: 'Wheel Bearing', th: 'ลูกปืนล้อ' },
      sub:  { en: 'Tapered Roller Bearing Pair', th: 'ลูกปืนเทเปอร์แบบคู่' },
      status: { label: { en: 'Monitor', th: 'ควรเฝ้าดู' }, color: 'var(--warn)' },
      specs: [
        [{ en: 'Type', th: 'ชนิด' }, { en: 'Tapered Roller', th: 'ตลับลูกปืนเทเปอร์' }],
        [{ en: 'Rollers', th: 'ลูกกลิ้ง' }, { en: '12 per race', th: '12 ลูกต่อแถว' }],
        [{ en: 'Service Interval', th: 'ระยะตรวจเช็ก' }, { en: 'Every 40,000 km', th: 'ทุก 40,000 กม.' }],
        [{ en: 'Lubrication', th: 'การหล่อลื่น' }, { en: 'High-temp Grease', th: 'จารบีทนความร้อนสูง' }],
        [{ en: 'Failure Sign', th: 'อาการเสีย' }, { en: 'Humming on turns', th: 'มีเสียงหึ่ง/ฮือ ตอนเลี้ยว' }],
      ],
      detail: [
        { label: { en: 'Tapered rollers', th: 'ลูกกลิ้งเทเปอร์' },
          desc: { en: '12 tapered rollers carry the whole corner weight and let the hub spin freely — dry grease gives the classic humming on turns.', th: 'ลูกกลิ้ง 12 ตัวรับน้ำหนักมุมล้อและช่วยให้ดุมหมุนลื่น หากจารบีแห้งจะมีเสียงหึ่งตอนเลี้ยว ควรเปลี่ยนเป็นคู่เสมอ' } },
      ],
    },

  },
};
