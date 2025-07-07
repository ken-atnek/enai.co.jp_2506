/* =======================================
 * 応募ページ
 * URL: src/app/form/page.tsx
 * Created: 2025-06-17
 * Last updated: 2025-06-17
 * ======================================= */

'use client';

import PageTitle from '@/components/common/PageTitle';
import styles from '@/styles/PageForm.module.scss';
import { useState } from 'react';
import Modal from '@/components/Modal';

export default function Contact() {
  const [position, setPosition] = useState('');
  const [positionDetail, setPositionDetail] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastKana, setLastKana] = useState('');
  const [firstKana, setFirstKana] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [qualification, setQualification] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [remarks, setRemarks] = useState('');
  const [motivation, setMotivation] = useState('');
  const [selfPR, setSelfPR] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false); // 確認画面フラグ
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダル制御
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [desiredChangeDate, setDesiredChangeDate] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  // 住所用フィールド
  const [zipCode, setZipCode] = useState('');
  const [prefecture, setPrefecture] = useState('');
  const [city, setCity] = useState('');
  const [addressDetail, setAddressDetail] = useState('');

  // **確認ボタンの処理**
  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!position || !lastName || !email || !phone || !qualification) {
      setStatus('必須項目を入力してください');
      return;
    }

    setIsConfirming(true); // 確認画面へ
    setStatus('');
  };

  // **修正ボタンの処理（入力画面に戻る）**
  const handleEdit = () => {
    setIsConfirming(false);
  };

  // **送信処理**
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('position', position);
    formData.append('positionDetail', positionDetail);
    formData.append('name', `${lastName} ${firstName}`);
    formData.append('kana', `${lastKana} ${firstKana}`);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('qualification', qualification);
    formData.append('education', education);
    formData.append('experience', experience);
    formData.append('remarks', remarks);
    formData.append('motivation', motivation);
    formData.append('selfPR', selfPR);
    formData.append('employmentStatus', employmentStatus);
    formData.append('desiredChangeDate', desiredChangeDate);
    formData.append('gender', gender);
    formData.append('age', age);
    // 住所フィールドを追加
    formData.append('zipCode', zipCode);
    formData.append('prefecture', prefecture);
    formData.append('city', city);
    formData.append('addressDetail', addressDetail);

    try {
      const response = await fetch('/backend/contact.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      // console.log('サーバーレスポンス:', result);

      if (result.success) {
        setPosition('');
        setPositionDetail('');
        setStatus('');
        setIsModalOpen(true); // モーダルを開く
        setTimeout(() => setIsModalOpen(false), 3000); // 3秒後に自動閉じる
        setEmail('');
        setPhone('');
        setQualification('');
        setEducation('');
        setExperience('');
        setRemarks('');
        setMotivation('');
        setSelfPR('');
        setEmploymentStatus('');
        setDesiredChangeDate('');
        setGender('');
        setAge('');
        // 住所フィールドもリセット
        setZipCode('');
        setPrefecture('');
        setCity('');
        setAddressDetail('');
        setIsConfirming(false); // 入力画面に戻す
      } else {
        setStatus(result.error || '送信に失敗しました。');
      }
    } catch (error) {
      console.error('エラー:', error);
      setStatus('エラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };

  // positionの表示用ラベル
  const positionLabelMap: { [key: string]: string } = {
    newgraduate: '新卒・第二新卒',
    career: '中途採用',
  };

  return (
    <>
      <PageTitle title="応募フォーム" titleEn="APPLICATION FORM" />

      <section className={styles.contactForm}>
        <article>
          <h3>採用応募フォーム</h3>
          <p>
            合同会社縁合(住宅型有料老人ホーム 梨園、いにしえ通所介護事業所
            梨園、梨園 居宅介護新事務所)は新卒・中途採用の募集を行っております。
            下記のフォームからご応募ください。
            エントリー内容を検討のうえ、後日、弊社採用担当者より改めてご連絡をさせていただきます。
            ※入力した情報はSSL暗号化通信によって安全に送信されます。
          </p>
        </article>
        <form
          className={styles.blockForm}
          onSubmit={isConfirming ? handleSubmit : handleConfirm}
        >
          {isConfirming ? (
            // ✅ 確認画面
            <div className={styles.statusConfirm}>
              <p>入力内容を確認してください。</p>
              <div>{`${lastName} ${firstName}`}</div>
              <div>{`${lastKana} ${firstKana}`}</div>
              <div>{positionLabelMap[position] || position}</div>
              <div>{positionDetail}</div>
              <div>{email}</div>
              {/* 住所の各フィールド */}
              <div>{zipCode}</div>
              <div>{prefecture}</div>
              <div>{city}</div>
              <div>{addressDetail}</div>
              <div>{phone}</div>
              <div>{qualification}</div>
              <div>{education}</div>
              <div>{experience}</div>
              <div>{desiredChangeDate}</div>
              <div>{employmentStatus}</div>
              <div>{gender}</div>
              <div>{age}</div>
              <div>{remarks}</div>
              <div>{motivation}</div>
              <div>{selfPR}</div>

              <div className={styles.box_btn}>
                <button type="button" onClick={handleEdit}>
                  修正する
                </button>
                <button type="submit" disabled={loading}>
                  {loading ? '送信中…' : '送信'}
                </button>
              </div>
            </div>
          ) : (
            // ✅ 入力画面
            <div className={styles.boxFrom}>
              <dl>
                <dt className={styles.formRequired}>応募区分</dt>
                <dd className={styles.checkRadio}>
                  <label>
                    <input
                      type="radio"
                      name="position"
                      value="newgraduate"
                      checked={position === 'newgraduate'}
                      onChange={(e) => setPosition(e.target.value)}
                    />
                    <span>新卒・第二新卒</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="position"
                      value="career"
                      checked={position === 'career'}
                      onChange={(e) => setPosition(e.target.value)}
                    />
                    <span>中途採用</span>
                  </label>
                </dd>
              </dl>
              <dl>
                <dt className={styles.formRequired}>応募職種</dt>
                <dd className={styles.checkRadio}>
                  <label>
                    <input
                      type="radio"
                      name="positionDetail"
                      value="careworker"
                      checked={positionDetail === 'careworker'}
                      onChange={(e) => setPositionDetail(e.target.value)}
                    />
                    <span>介護職員</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="positionDetail"
                      value="nurse"
                      checked={positionDetail === 'nurse'}
                      onChange={(e) => setPositionDetail(e.target.value)}
                    />
                    <span>看護師（正・准）</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="positionDetail"
                      value="visiting"
                      checked={positionDetail === 'visiting'}
                      onChange={(e) => setPositionDetail(e.target.value)}
                    />
                    <span>訪問看護</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="positionDetail"
                      value="dayservice"
                      checked={positionDetail === 'dayservice'}
                      onChange={(e) => setPositionDetail(e.target.value)}
                    />
                    <span>デイサービス</span>
                  </label>
                </dd>
              </dl>
              <dl className={styles.formName}>
                <dt className={styles.formRequired}>お名前</dt>
                <dd>
                  <div className={styles.boxName01}>
                    <h4>氏名</h4>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      placeholder="姓"
                    />
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      placeholder="名"
                    />
                  </div>
                  <div className={styles.boxName02}>
                    <h4>ふりがな</h4>
                    <input
                      type="text"
                      value={lastKana}
                      onChange={(e) => setLastKana(e.target.value)}
                      // required
                      placeholder="セイ"
                    />
                    <input
                      type="text"
                      value={firstKana}
                      onChange={(e) => setFirstKana(e.target.value)}
                      // required
                      placeholder="メイ"
                    />
                  </div>
                </dd>
              </dl>
              <dl>
                <dt className={styles.formRequired}>メールアドレス</dt>
                <dd>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="メールアドレスを入力してください"
                  />
                </dd>
              </dl>
              <dl className={styles.formAddress}>
                <dt className={styles.formRequired}>住所</dt>
                <dd>
                  <span>郵便番号</span>
                  <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder="例: 860-0001"
                    required
                    className={styles.postNumber}
                  />
                  <span>都道府県</span>
                  <div>
                    <select
                      value={prefecture}
                      onChange={(e) => setPrefecture(e.target.value)}
                      required
                    >
                      <option value="">選択してください</option>
                      <option value="熊本県">熊本県</option>
                      <option value="福岡県">福岡県</option>
                      <option value="鹿児島県">鹿児島県</option>
                      <option value="その他">その他</option>
                    </select>
                  </div>
                  <span>市区町村</span>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="例: 熊本市中央区"
                    required
                  />
                  <span>番地・建物名</span>
                  <input
                    type="text"
                    value={addressDetail}
                    onChange={(e) => setAddressDetail(e.target.value)}
                    placeholder="例: 中央街1-1 ハイツA101"
                    required
                  />
                </dd>
              </dl>
              <dl>
                <dt>電話番号</dt>
                <dd>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="お電話番号を入力してください"
                  />
                </dd>
              </dl>
              <dl>
                <dt className={styles.formRequired}>性別</dt>
                <dd className={styles.checkRadio}>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="男性"
                      checked={gender === '男性'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <span>男性</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="女性"
                      checked={gender === '女性'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <span>女性</span>
                  </label>
                </dd>
              </dl>
              <dl>
                <dt className={styles.formRequired}>年齢（応募時点）</dt>
                <dd>
                  <input
                    type="number"
                    min="18"
                    max="100"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="年齢（応募時点）"
                  />
                </dd>
              </dl>
              <dl>
                <dt>転職希望時期</dt>
                <dd>
                  <input
                    type="date"
                    value={desiredChangeDate}
                    onChange={(e) => setDesiredChangeDate(e.target.value)}
                  />
                </dd>
              </dl>
              <dl className={styles.formSelect}>
                <dt className={styles.formRequired}>現在の就業状況</dt>
                <dd>
                  <select
                    value={employmentStatus}
                    onChange={(e) => setEmploymentStatus(e.target.value)}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="就業中">就業中</option>
                    <option value="就業してない">就業してない</option>
                  </select>
                </dd>
              </dl>
              <dl className={styles.formText}>
                <dt className={styles.formRequired}>資格 （取得年月／名称）</dt>
                <dd>
                  <textarea
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    required
                    placeholder="資格 （取得年月／名称）"
                  />
                </dd>
              </dl>
              <dl className={styles.formText}>
                <dt className={styles.formRequired}>
                  最終学歴 （在学期間／学校名・専攻）
                </dt>
                <dd>
                  <textarea
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    required
                    placeholder="最終学歴 （在学期間／学校名・専攻）"
                  />
                </dd>
              </dl>
              <dl className={styles.formText}>
                <dt>
                  職務経歴（1,500文字以内）
                  （在籍期間、会社名、職務内容をできるだけ詳しくご記入ください。）
                </dt>
                <dd>
                  <textarea
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    required
                    placeholder="職務経歴をご記入ください"
                  />
                </dd>
              </dl>

              <dl className={styles.formText}>
                <dt className={styles.formRequired}>志望動機（800文字以内）</dt>
                <dd>
                  <textarea
                    value={motivation}
                    onChange={(e) => setMotivation(e.target.value)}
                    required
                    placeholder="志望動機をご記入ください"
                  />
                </dd>
              </dl>
              <dl className={styles.formText}>
                <dt className={styles.formRequired}>自己PR（800文字以内）</dt>
                <dd>
                  <textarea
                    value={selfPR}
                    onChange={(e) => setSelfPR(e.target.value)}
                    required
                    placeholder="自己PRをご記入ください"
                  />
                </dd>
              </dl>
              <dl className={styles.formText}>
                <dt>希望条件やご質問など</dt>
                <dd>
                  <textarea
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    placeholder="希望条件やご質問など"
                  />
                </dd>
              </dl>
              <div className={styles.box_btn}>
                <button type="submit">確 認</button>
              </div>
            </div>
          )}
          <p>{status}</p>
        </form>
        {/* ✅ モーダル表示 */}
        {isModalOpen && (
          <Modal
            message="お問い合わせが送信されました。"
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </section>
    </>
  );
}
