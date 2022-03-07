import React , { useState } from 'react';
import './App.scss';

function App() {
  let [modal,setModal] = useState('false');
  let [tab,setTab] = useState('list1');
  return (
    <div className="App">

      <div id="portfolio">
        <div className='layout'>
          <div className="title gsans">Portfolio<span>.</span></div>
          <div className='tabBtn'>
            <button class={tab==="list1"?"active":null} onClick={()=>{setTab("list1")}}><span></span><em>Project</em></button>
            <button class={tab==="list2"?"active":null} onClick={()=>{setTab("list2")}}><span></span><em>Side project</em></button>
          </div>
          
          {
            tab === "list1"
            ? <Project setModal={setModal} />
            : <SideProject setModal={setModal} />
          }

          <ModalContent modal={modal} setModal={setModal} />

        </div>
      </div>

      <footer>
        Cursor icons created by Pixel perfect - Flaticon<br />
        Portfolio icons created by iconixar - Flaticon<br /><br />
        COPYRIGHT © 2022 LEENARA. ALL RIGHTS RESERVED.
      </footer>


    </div>
  );
}

function SideProject(props){
  return(
    <div className='portfolio_list'>

      <div className='item youtube'>
          <button onClick={()=>{props.setModal('youtube')}}>
            <div className='item_thumb'>
              <span className='arr'></span>
            </div>
            <div className='item_info'>
              <strong>YouTube</strong>
              <div className='tag'> 
                <span>#side project</span>
              </div>
            </div>
          </button>
      </div>

      <div className='item covid'>
          <button onClick={()=>{props.setModal('covid')}}>
            <div className='item_thumb'>
              <span className='arr'></span>
            </div>
            <div className='item_info'>
              <strong>코로나 국내 발생현황</strong>
              <div className='tag'> 
                <span>#side project</span>
              </div>
            </div>
          </button>
      </div>

      <div className='item movie'>
          <button onClick={()=>{props.setModal('movie')}}>
            <div className='item_thumb'>
              <span className='arr'></span>
            </div>
            <div className='item_info'>
              <strong>THE Movies</strong>
              <div className='tag'> 
                <span>#side project</span>
              </div>
            </div>
          </button>
      </div>


    </div>
  )
}

function Project(props){
  return(
    <div className='portfolio_list'>
      <div className='item ky'>
        <button onClick={()=>{props.setModal('ky')}}>
          <div className='item_thumb'><span className='arr'></span></div>
          <div className='item_info'>
            <strong>건양대학교병원</strong>
            <div className='tag'> 
              <span>#병원</span>
            </div>
          </div>
        </button>
      </div>

      <div className='item gy'>
        <button onClick={()=>{props.setModal('gy')}}>
          <div className='item_thumb'><span className='arr'></span></div>
          <div className='item_info'>
            <strong>계룡시청 문화관광 </strong>
            <div className='tag'> 
              <span>#관광</span>
              <span>#관공서&#47;기관</span>
            </div>
          </div>
        </button>
      </div>

      <div className='item seocheon'>
          <button onClick={()=>{props.setModal('seocheon')}}>
            <div className='item_thumb'>
              <span className='arr'></span>
            </div>
            <div className='item_info'>
              <strong>서천군청 문화관광&amp;미디어</strong>
              <div className='tag'> 
                <span>#관광</span>
                <span>#미디어</span>
                <span>#관공서&#47;기관</span>
              </div>
            </div>
          </button>
      </div>

      <div className='item yuseong'>
          <button onClick={()=>{props.setModal('yuseong')}}>
            <div className='item_thumb'>
              <span className='arr'></span>
            </div>
            <div className='item_info'>
              <strong>대전 유성구청 웹포털</strong>
              <div className='tag'> 
                <span>#포털</span>
                <span>#관공서&#47;기관</span>
              </div>
            </div>
          </button>
      </div>

      <div className='item narae'>
        <button onClick={()=>{props.setModal('narae')}}>
          <div className='item_thumb'><span className='arr'></span></div>
          <div className='item_info'>
            <strong>대전 유성구 교육플랫폼 나래이음</strong>
            <div className='tag'> 
              <span>#교육</span>
              <span>#관공서&#47;기관</span>
            </div>
          </div>
        </button>
      </div>

      <div className='item krict'>
        <button onClick={()=>{props.setModal('krict')}}>
          <div className='item_thumb'><span className='arr'></span></div>
          <div className='item_info'>
            <strong>한국화학연구원</strong>
            <div className='tag'> 
              <span>#관공서&#47;기관</span>
            </div>
          </div>
        </button>
      </div>

      <div className='item kclub'>
        <button onClick={()=>{props.setModal('kclub')}}>
          <div className='item_thumb'><span className='arr'></span></div>
          <div className='item_info'>
            <strong>경력개발 종합지원 플랫폼 K-클럽</strong>
            <div className='tag'> 
              <span>#기관</span>
            </div>
          </div>
        </button>
      </div>

      <div className='item bridge'>
        <button onClick={()=>{props.setModal('bridge')}}>
          <div className='item_thumb'><span className='arr'></span></div>
          <div className='item_info'>
            <strong>예산군청 예당호출렁다리 및 음악분수</strong>
            <div className='tag'> 
              <span>#관광</span>
              <span>#관공서&#47;기관</span>
            </div>
          </div>
        </button>
      </div>

      <div className='item daedeok'>
        <button onClick={()=>{props.setModal('daedeok')}}>
          <div className='item_thumb'><span className='arr'></span></div>
          <div className='item_info'>
            <strong>대전사이언스투어</strong>
            <div className='tag'> 
              <span>#관광</span>
              <span>#관공서&#47;기관</span>
            </div>
          </div>
        </button>
      </div>

      <div className='item nabe'>
        <button onClick={()=>{props.setModal('nabe')}}>
          <div className='item_thumb'><span className='arr'></span></div>
          <div className='item_info'>
            <strong>제6회 청소년 나Be한마당</strong>
            <div className='tag'> 
              <span>#축제</span>
            </div>
          </div>
        </button>
      </div>

      <div className='item fair'>
        <button onClick={()=>{props.setModal('fair')}}>
          <div className='item_thumb'><span className='arr'></span></div>
          <div className='item_info'>
            <strong>제21회 국제인삼교역전</strong>
            <div className='tag'> 
              <span>#축제</span>
            </div>
          </div>
        </button>
      </div>

      <div className='item komsa'>
          <button onClick={()=>{props.setModal('komsa')}}>
            <div className='item_thumb'>
              <span className='arr'></span>
            </div>
            <div className='item_info'>
              <strong>한국해양교통안전공단</strong>
              <div className='tag'> 
                <span>#관공서&#47;기관</span>
              </div>
            </div>
          </button>
      </div>

      <div className='item mokwon'>
        <button onClick={()=>{props.setModal('mokwon')}}>
          <div className='item_thumb'><span className='arr'></span></div>
          <div className='item_info'>
            <strong>목원대학교</strong>
            <div className='tag'> 
              <span>#교육</span>
              <span>#대학교</span>
            </div>
          </div>
        </button>
      </div>

      <div className='item cnc'>
        <button onClick={()=>{props.setModal('cnc')}}>
          <div className='item_thumb'><span className='arr'></span></div>
          <div className='item_info'>
            <strong>충남문화예술 종합정보시스템</strong>
            <div className='tag'> 
              <span>#아카이브</span>
              <span>#문화&#47;예술</span>
            </div>
          </div>
        </button>
      </div>

      <div className='item gongju'>
        <button onClick={()=>{props.setModal('gongju')}}>
          <div className='item_thumb'><span className='arr'></span></div>
          <div className='item_info'>
            <strong>공주시청 웹포털</strong>
            <div className='tag'> 
              <span>#포털</span>
              <span>#관공서&#47;기관</span>
            </div>
          </div>
        </button>
      </div>
      
      <div className='item yd'>
        <button onClick={()=>{props.setModal('yd')}}>
          <div className='item_thumb'><span className='arr'></span></div>
          <div className='item_info'>
            <strong>영동군청 웹포털</strong>
            <div className='tag'> 
              <span>#포털</span>
              <span>#관공서&#47;기관</span>
            </div>
          </div>
        </button>
      </div>

      <div className='item cile'>
        <button onClick={()=>{props.setModal('cile')}}>
          <div className='item_thumb'><span className='arr'></span></div>
          <div className='item_info'>
            <strong>충남평생교육진흥원</strong>
            <div className='tag'> 
              <span>#교육</span>
              <span>#관공서&#47;기관</span>
            </div>
          </div>
        </button>
      </div>

{/* 
      <div className='item mfd'>
        <button onClick={()=>{props.setModal('mfd')}}>
          <div className='item_thumb'><span className='arr'></span></div>
          <div className='item_info'>
            <strong>수입식품방사능안전정보</strong>
            <div className='tag'> 
              <span>#관공서&#47;기관</span>
            </div>
          </div>
        </button>
      </div> */}

      <div className='item mosi'>
        <button onClick={()=>{props.setModal('mosi')}}>
          <div className='item_thumb'><span className='arr'></span></div>
          <div className='item_info'>
            <strong>서천군청 한산모시관</strong>
            <div className='tag'>
              <span>#문화</span>
              <span>#관공서&#47;기관</span>
            </div>
          </div>
        </button>
      </div>

      {/* <div className='item dgist'>
        <button onClick={()=>{props.setModal('dgist')}}>
          <div className='item_thumb'><span className='arr'></span></div>
          <div className='item_info'>
            <strong>DGIST 인권센터 &amp; 산학협력단</strong>
            <div className='tag'> 
              <span>#교육</span>
              <span>#대학교</span>
            </div>
          </div>
        </button>
      </div> */}

      

      

      

    </div>
  )
}

function ModalContent (props){
  switch(props.modal){
    case 'false' :
      return(null);

    case 'yuseong' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>대전 유성구청 웹포털</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2021.02.01 ~ 2021.04.30</li>
                <li><strong>작업범위</strong>메인, 레이아웃, 서브메인</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>주요 역할 : UI/UX 개발 및 퍼블리싱</li>
                <li>사용 기술 : HTML &#47; CSS &#47; JavaScript(jQuery) &#47; AJAX &#47; JSON &#47; SVN</li>
                <li>정보통신 접근성(WA) 인증 웹 접근성 마크 획득 (대표)</li>
                <li>검색엔진최적화 작업</li>
                <li>총 11개 사이트의 공통 레이아웃 작업</li>
                <li>개별 메인, 서브메인 UI개발 및 퍼블리싱</li>
                <li>크로스브라우징 및 반응형 작업</li>
                <li>인터렉션 작업 (유성구 마스코트 캐릭터와 일러스트 요소 ov효과 등등 animation 활용한 인터렉션 작업)</li>
                <li>localStorage를 이용한 자주 방문하는 메뉴를 나만의 메뉴에 저장하는 서비스 개발</li>
                <li>클릭 시에 노출되는 콘텐츠의 html을 분리하고 Ajax를 이용해 데이터를 불러오는 형식으로 속도개선</li>
                <li>사이트 오픈 후 두 달간 운영 및 유지보수 등 안정화 기간 후 유지보수팀으로 인계</li>
              </ul>
              <div className='site_btn'>
                <a href="https://www.yuseong.go.kr/kor/index.do" target="_blank" rel="noopener noreferrer">대전유성구청(대표)<i className='xi-external-link'></i></a>
                <a href="https://www.yuseong.go.kr/mayor/" target="_blank" rel="noopener noreferrer">열린구청장실<i className='xi-external-link'></i></a>
                <a href="https://www.yuseong.go.kr/health/" target="_blank" rel="noopener noreferrer">보건소<i className='xi-external-link'></i></a>
                <a href="https://www.yuseong.go.kr/yesan/" target="_blank" rel="noopener noreferrer">주민참여예산제<i className='xi-external-link'></i></a>
                <a href="https://www.yuseong.go.kr/clean/" target="_blank" rel="noopener noreferrer">대형폐기물<i className='xi-external-link'></i></a>
                <a href="https://www.yuseong.go.kr/cor/" target="_blank" rel="noopener noreferrer">코로나19상황<i className='xi-external-link'></i></a>
                <a href="https://www.yuseong.go.kr/contract/" target="_blank" rel="noopener noreferrer">계약정보공개<i className='xi-external-link'></i></a>
                <a href="https://www.yuseong.go.kr/apartment/" target="_blank" rel="noopener noreferrer">공동주택지원<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox imgbox2'>
                <div><img src="img/yuseong_img01.jpg" /> <p>▲ 대전유성구청(대표)</p></div>
                <div><img src="img/yuseong_img02.jpg" /> <p>▲ 보건소</p></div>
              </div>

            </div>
          </div>
        </div>
      );

    case 'komsa' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>한국해양교통안전공단</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2020.09.01 ~ 2020.10.30</li>
                <li><strong>작업범위</strong>메인, 레이아웃, 특화페이지, 프로그램페이지, 게시판</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>주요 역할 : UI/UX 개발 및 퍼블리싱</li>
                <li>사용 기술 : HTML &#47; CSS &#47; JavaScript(jQuery) &#47; AJAX &#47; SVN</li>
                <li>정보통신 접근성(WA) 인증 웹 접근성 마크 획득 (대표)</li>
                <li>전체 사이트 공통 레이아웃 &#47; 스타일가이드 작업</li>
                <li>개별 메인 UI개발 및 퍼블리싱 &#47; 인터렉션 작업</li>
                <li>프로그램, 게시판 페이지 UI개발 및 퍼블리싱</li>
                <li>가로 스크롤 이벤트를 이용한 특화페이지 UI개발 및 퍼블리싱</li>
                <li>크로스브라우징 및 반응형 작업</li>
                <li>클릭 시에 노출되는 콘텐츠의 html을 분리하고 Ajax를 이용해 데이터를 불러오는 형식으로 속도 개선</li>
                <li>사이트 오픈 후 두 달간 운영 및 유지보수 등 안정화 기간 후 유지보수팀으로 인계</li>
              </ul>
              <div className='site_btn'>
                <a href="https://www.komsa.or.kr/kor/" target="_blank" rel="noopener noreferrer">한국해양교통안전공단(대표)<i className='xi-external-link'></i></a>
                <a href="https://www.komsa.or.kr/seoul/index.do" target="_blank" rel="noopener noreferrer">한국해양교통안전공단(지사)<i className='xi-external-link'></i></a>
                <a href="https://www.komsa.or.kr/edu/" target="_blank" rel="noopener noreferrer">해양안전교육포털<i className='xi-external-link'></i></a>
                <br />
                <a href="https://www.komsa.or.kr/kor/sub06_0602.do" target="_blank" rel="noopener noreferrer">특화페이지(사진전)<i className='xi-external-link'></i></a>
                <a href="https://www.komsa.or.kr/kor/sub06_0601.do" target="_blank" rel="noopener noreferrer">특화페이지(연혁)<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox imgbox2'>
                <div><img src="img/komsa_img01.jpg" /> <p>▲ 한국해양교통안전공단(대표)</p></div>
                <div><img src="img/komsa_img02.jpg" /> <p>▲ 특화페이지(사진전)</p></div>
              </div>


            </div>
          </div>
        </div>
      );
    case 'narae' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>대전 유성구 교육플랫폼 나래이음</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2021.01.04 ~ 2021.01.28</li>
                <li><strong>작업범위</strong>메인, 레이아웃, 프로그램페이지, 게시판</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>주요 역할 : UI/UX 개발 및 퍼블리싱</li>
                <li>사용 기술 : HTML &#47; CSS &#47; JavaScript(jQuery) &#47; SVN</li>
                <li>검색엔진최적화 작업</li>
                <li>Css Animation &amp; Lottie 파일을 이용한 메인 인터렉션 작업</li>
                <li>레이아웃&#47;메인 UI개발 및 퍼블리싱</li>
                <li>프로그램, 게시판 페이지 UI개발 및 퍼블리싱</li>
                <li>크로스브라우징 및 반응형 작업</li>
                <li>사이트 오픈 후 두 달간 운영 및 유지보수 등 안정화 기간 후 유지보수팀으로 인계</li>
              </ul>
              <div className='site_btn'>
                <a href="https://www.yuseong.go.kr/naraedu/" target="_blank" rel="noopener noreferrer">사이트바로가기<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox'>
                <div><img src="img/narae_img01.jpg" /></div>
              </div>
        
            </div>
          </div>
        </div>
      );
      
    case 'daedeok' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>대전사이언스투어</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2020.10.07 ~ 2020.11.13</li>
                <li><strong>작업범위</strong>메인, 레이아웃, 프로그램페이지, 게시판</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>주요 역할 : UI/UX 개발 및 퍼블리싱</li>
                <li>사용 기술 : HTML &#47; CSS &#47; JavaScript(jQuery) &#47; SVN</li>
                <li>Css Animation &amp; Lottie 파일을 이용한 메인 인터렉션 작업</li>
                <li>레이아웃&#47;메인 UI개발 및 퍼블리싱</li>
                <li>프로그램, 게시판 페이지 UI개발 및 퍼블리싱</li>
                <li>크로스브라우징 및 반응형 작업</li>
                <li>사이트 오픈 후 두 달간 운영 및 유지보수 등 안정화 기간 후 유지보수팀으로 인계</li>
              </ul>
              <div className='site_btn'>
                <a href="http://daedeok-tour.gonet.co.kr/kr/" target="_blank" rel="noopener noreferrer">사이트바로가기<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox imgbox2'>
                <div><img src="img/daedeok_img01.jpg" /> <p>▲ 프로그램(추천코스 리스트)</p></div>
                <div><img src="img/daedeok_img02.jpg" /> <p>▲ 프로그램(추천코스 상세)</p></div>
              </div>
        
            </div>
          </div>
        </div>
      );  
    case 'mosi' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>서천군청 한산모시관</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2018.12.03 ~ 2018.12.31</li>
                <li><strong>작업범위</strong>메인, 레이아웃, 콘텐츠페이지</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>주요 역할 : UI/UX 개발 및 퍼블리싱</li>
                <li>사용 기술 : HTML &#47; CSS &#47; JavaScript(jQuery) &#47; SVN</li>
                <li>레이아웃&#47;메인&#47; 콘텐츠페이지 UI개발 및 퍼블리싱</li>
                <li>크로스브라우징 및 반응형 작업</li>
                <li>사이트 오픈 후 두 달간 운영 및 유지보수 등 안정화 기간 후 유지보수팀으로 인계</li>
              </ul>
              <div className='site_btn'>
                <a href="https://www.seocheon.go.kr/mosi.do" target="_blank" rel="noopener noreferrer">사이트바로가기<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox'>
                <div><img src="img/mosi_img01.jpg" /></div>
              </div>
        
            </div>
          </div>
        </div>
      );

    case 'mfd' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>식품의약품안전처 수입식품방사능안전정보</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2020.09.01 ~ 2020.09.07</li>
                <li><strong>작업범위</strong>메인, 레이아웃</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>주요 역할 : UI/UX 개발 및 퍼블리싱</li>
                <li>사용 기술 : HTML &#47; CSS &#47; JavaScript(jQuery) &#47; SVN</li>
              </ul>
              <div className='site_btn'>
                <a href="https://radsafe.mfds.go.kr/radsafe" target="_blank" rel="noopener noreferrer">사이트바로가기<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox'>
                <div><img src="img/mfd_img01.jpg" /></div>
              </div>
        
            </div>
          </div>
        </div>
      );
    
    case 'cnc' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>충남문화예술 종합정보시스템</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2020.01.03 ~ 2020.02.21</li>
                <li><strong>작업범위</strong>전체 페이지</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>주요 역할 : UI/UX 개발 및 퍼블리싱</li>
                <li>사용 기술 : HTML &#47; CSS &#47; JavaScript(jQuery) &#47; SVN</li>
                <li>검색엔진최적화 작업</li>
                <li>레이아웃&#47;메인 UI개발 및 퍼블리싱 &#47; 인터렉션 작업</li>
                <li>크로스브라우징 및 반응형 작업</li>
                <li>사이트 오픈 후 두 달간 운영 및 유지보수 등 안정화 기간 후 유지보수팀으로 인계</li>
              </ul>
              <div className='site_btn'>
                <a href="https://cnc.cacf.or.kr/main/" target="_blank" rel="noopener noreferrer">사이트바로가기<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox'>
                <div><img src="img/cnc_img01.jpg" /></div>
              </div>
        
            </div>
          </div>
        </div>
      );
    case 'seocheon' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>서천군청 문화관광&amp;미디어</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2021.05.11 ~ 2021.06.18</li>
                <li><strong>작업범위</strong>메인, 레이아웃, 프로그램페이지</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>주요 역할 : UI/UX 개발 및 퍼블리싱</li>
                <li>사용 기술 : HTML &#47; CSS &#47; JavaScript(jQuery) &#47; SVN</li>
                <li>기존 운영사이트에서 메인&amp;레이아웃 교체 , 프로그램페이지 추가 작업</li>
                <li>크로스브라우징 및 반응형 작업</li>
                <li>사이트 오픈 후 두 달간 운영 및 유지보수 등 안정화 기간 후 유지보수팀으로 인계</li>
                
              </ul>
              <div className='site_btn'>
                <a href="https://www.seocheon.go.kr/tour.do" target="_blank" rel="noopener noreferrer">문화관광<i className='xi-external-link'></i></a>
                <a href="https://www.seocheon.go.kr/media.do" target="_blank" rel="noopener noreferrer">미디어<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox imgbox2'>
                <div><img src="img/seocheon_img01.jpg" /> <p>▲ 문화관광</p></div>
                <div><img src="img/seocheon_img02.jpg" /> <p>▲ 미디어</p></div>
              </div>
        
            </div>
          </div>
        </div>
      );
    case 'bridge' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>예산군청 예당호출렁다리 및 음악분수</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2020.10.05 ~ 2021.01.08</li>
                <li><strong>작업범위</strong>메인, 레이아웃, 사이버투어</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>주요 역할 : UI/UX 개발 및 퍼블리싱</li>
                <li>사용 기술 : HTML &#47; CSS &#47; JavaScript(jQuery) &#47; JSON &#47; SVN</li>
                <li>레이아웃&#47;메인 UI개발 및 퍼블리싱 &#47; 인터렉션 작업</li>
                <li>크로스브라우징 및 반응형 작업</li>
                <li>사이트 오픈 후 두 달간 운영 및 유지보수 등 안정화 기간 후 유지보수팀으로 인계</li>

              </ul>
              <div className='site_btn'>
                <a href="https://www.yesan.go.kr/bridge.do" target="_blank" rel="noopener noreferrer">사이트바로가기<i className='xi-external-link'></i></a>
                <a href="https://www.yesan.go.kr/cyber/bridge/index.html" target="_blank" rel="noopener noreferrer">사이버투어<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox imgbox2'>
                <div><img src="img/bridge_img01.jpg" /> <p>▲ 예당호출렁다리</p></div>
                <div><img src="img/bridge_img02.jpg" /> <p>▲ 사이버투어</p></div>
              </div>
        
            </div>
          </div>
        </div>
      );
    case 'gy' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>계룡시청 문화관광</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2021.07.26 ~ 2021.08.26</li>
                <li><strong>작업범위</strong>메인, 레이아웃</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>주요 역할 : UI/UX 개발 및 퍼블리싱</li>
                <li>사용 기술 : HTML &#47; CSS &#47; JavaScript(jQuery) &#47; AJAX  &#47; SVN</li>
                <li>전체 사이트 공통 레이아웃 작업</li>
                <li>개별 메인 UI개발 및 퍼블리싱 &#47; 인터렉션 작업</li>
                <li>크로스브라우징 및 반응형 작업</li>
                <li>클릭 시에 노출되는 콘텐츠의 html을 분리하고 Ajax를 이용해 데이터를 불러오는 형식으로 속도 개선</li>
              </ul>
              <div className='site_btn'>
                <a href="https://www.gyeryong.go.kr/tour/" target="_blank" rel="noopener noreferrer">문화관광<i className='xi-external-link'></i></a>
                <a href="https://www.gyeryong.go.kr/nanum/" target="_blank" rel="noopener noreferrer">자원봉사센터<i className='xi-external-link'></i></a>
                <a href="https://www.gyeryong.go.kr/council/" target="_blank" rel="noopener noreferrer">시의회<i className='xi-external-link'></i></a>
                <a href="https://www.gyeryong.go.kr/janghak/" target="_blank" rel="noopener noreferrer">애향장학회<i className='xi-external-link'></i></a>
                <a href="https://www.gyeryong.go.kr/nongup/" target="_blank" rel="noopener noreferrer">농업기술센터<i className='xi-external-link'></i></a>
                <a href="https://www.gyeryong.go.kr/health/" target="_blank" rel="noopener noreferrer">보건소<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox'>
                <div><img src="img/gy_img01.jpg" /></div>
              </div>
              

            </div>
          </div>
        </div>
      );
    case 'krict' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>한국화학연구원</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2020.12.04 ~ 2021.01.28</li>
                <li><strong>작업범위</strong>메인, 레이아웃, 특화페이지, 프로그램페이지, 게시판</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>주요 역할 : UI/UX 개발 및 퍼블리싱</li>
                <li>사용 기술 : HTML &#47; CSS &#47; JavaScript(jQuery) &#47; AJAX  &#47; SVN</li>
                <li>정보통신 접근성(WA) 인증 웹 접근성 마크 획득 (대표)</li>
                <li>전체 사이트 공통 레이아웃</li>
                <li>개별 메인 UI개발 및 퍼블리싱 &#47; 인터렉션 작업</li>
                <li>프로그램, 게시판 페이지 UI개발 및 퍼블리싱</li>
                <li>가로 스크롤 이벤트를 이용한 특화페이지 UI개발 및 퍼블리싱</li>
                <li>크로스브라우징 및 반응형 작업</li>
                <li>클릭 시에 노출되는 콘텐츠의 html을 분리하고 Ajax를 이용해 데이터를 불러오는 형식으로 속도 개선</li>
                <li>사이트 오픈 후 두 달간 운영 및 유지보수 등 안정화 기간 후 유지보수팀으로 인계</li>
              </ul>
              <div className='site_btn'>
                <a href="https://www.krict.re.kr/kor/index.do" target="_blank" rel="noopener noreferrer">한국화학연구원(대표)<i className='xi-external-link'></i></a>
                <a href="https://www.krict.re.kr/school/index.do" target="_blank" rel="noopener noreferrer">KRICT School<i className='xi-external-link'></i></a>
                <a href="https://www.krict.re.kr/kor/sub06_07_01.do" target="_blank" rel="noopener noreferrer">특화페이지 ChemHistory<i className='xi-external-link'></i></a>
                <a href="https://www.krict.re.kr/kor/sub06_07_02.do" target="_blank" rel="noopener noreferrer">특화페이지 KRICT Highlight<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox'>
                <div><img src="img/krict_img01.jpg" /></div>
              </div>
              

            </div>
          </div>
        </div>
      );
    case 'cile' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>충남평생교육진흥원</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2019.07.17 ~ 2019.10.16</li>
                <li><strong>작업범위</strong>메인, 레이아웃</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>주요 역할 : UI/UX 개발 및 퍼블리싱</li>
                <li>사용 기술 : HTML &#47; CSS &#47; JavaScript(jQuery) &#47; SVN</li>
                <li>정보통신 접근성(WA) 인증 웹 접근성 마크 획득</li>
                <li>검색엔진최적화 작업</li>
                <li>레이아웃&#47;메인 UI개발 및 퍼블리싱</li>
                <li>크로스브라우징 및 반응형 작업</li>
                <li>숫자 카운팅 등 인터렉션 작업</li>
                <li>사이트 오픈 후 두 달간 운영 및 유지보수 등 안정화 기간 후 유지보수팀으로 인계</li>
              </ul>
              <div className='site_btn'>
                <a href="https://www.cile.or.kr/kor/" target="_blank" rel="noopener noreferrer">사이트바로가기<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox'>
                <div><img src="img/cile_img01.jpg" /></div>
              </div>
              

            </div>
          </div>
        </div>
      );
    case 'yd' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>영동군청 웹포털</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2019.07.08 ~ 2019.10.31</li>
                <li><strong>작업범위</strong>메인, 레이아웃, 스타일가이드</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>주요 역할 : UI/UX 개발 및 퍼블리싱</li>
                <li>사용 기술 : HTML &#47; CSS &#47; JavaScript(jQuery) &#47; AJAX &#47; SVN</li>
                <li>정보통신 접근성(WA) 인증 웹 접근성 마크 획득 (대표)</li>
                <li>검색엔진최적화 작업</li>
                <li>총 10개사이트 공통 레이아웃 &#47; 스타일가이드 작업</li>
                <li>개별 메인 UI개발 및 퍼블리싱 &#47; 인터렉션 작업</li>
                <li>크로스브라우징 및 반응형 작업</li>
                <li>클릭 시에 노출되는 콘텐츠의 html을 분리하고 Ajax를 이용해 데이터를 불러오는 형식으로 속도 개선</li>
                <li>사이트 오픈 후 두 달간 운영 및 유지보수 등 안정화 기간 후 유지보수팀으로 인계</li>

              </ul>
              <div className='site_btn'>
                <a href="https://yd21.go.kr/kr/" target="_blank" rel="noopener noreferrer">영동군청(대표)<i className='xi-external-link'></i></a>
                <a href="https://yd21.go.kr/tour/" target="_blank" rel="noopener noreferrer">문화관광<i className='xi-external-link'></i></a>
                <a href="https://yd21.go.kr/mayor/" target="_blank" rel="noopener noreferrer">열린군수실<i className='xi-external-link'></i></a>
                <a href="https://yd21.go.kr/nogunri/" target="_blank" rel="noopener noreferrer">노근리평화공원<i className='xi-external-link'></i></a>
                <a href="https://yd21.go.kr/rainbow/" target="_blank" rel="noopener noreferrer">레인보우힐링테마타운<i className='xi-external-link'></i></a>
                <a href="https://yd21.go.kr/portal/" target="_blank" rel="noopener noreferrer">통합예매시스템<i className='xi-external-link'></i></a>
                <a href="https://yd21.go.kr/gugak/" target="_blank" rel="noopener noreferrer">국악체험존<i className='xi-external-link'></i></a>
                <a href="https://yd21.go.kr/artcenter/" target="_blank" rel="noopener noreferrer">복합문화예술관<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox imgbox2'>
                <div><img src="img/yd_img01.jpg" /> <p>▲ 영동군청(대표)</p></div>
                <div><img src="img/yd_img02.jpg" /> <p>▲ 문화관광</p></div>
              </div>
              

            </div>
          </div>
        </div>
      );
    case 'gongju' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>공주시청 웹포털</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2019.12.23 ~ 2020.05.25</li>
                <li><strong>작업범위</strong>메인, 레이아웃, 스타일가이드, 사이버투어, 프로그램페이지, 게시판</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>주요 역할 : UI/UX 개발 및 퍼블리싱</li>
                <li>사용 기술 : HTML &#47; CSS &#47; JavaScript(jQuery) &#47; AJAX &#47; JSON &#47; SVN</li>
                <li>정보통신 접근성(WA) 인증 웹 접근성 마크 획득 (대표)</li>
                <li>검색엔진 최적화 작업</li>
                <li>총 25개 사이트의 공통 레이아웃 &#47; 스타일가이드 작업</li>
                <li>개별 메인, 부속기관 메인 템플릿 UI개발 및 퍼블리싱</li>
                <li>프로그램, 게시판 페이지 UI개발 및 퍼블리싱</li>
                <li>크로스브라우징 및 반응형 작업</li>
                <li>인터렉션 작업 (공주시 마스코트 캐릭터와 일러스트 요소 ov효과 등등 animation, lottie를 활용한 인터렉션 작업)</li>
                <li>클릭 시에 노출되는 콘텐츠의 html을 분리하고 Ajax를 이용해 데이터를 불러오는 형식으로 속도 개선</li>
                <li>사이트 오픈 후 두 달간 운영 및 유지보수 등 안정화 기간 후 유지보수팀으로 인계</li>
              </ul>
              <div className='site_btn'>
                <a href="https://www.gongju.go.kr/kr/" target="_blank" rel="noopener noreferrer">공주시청(대표)<i className='xi-external-link'></i></a>
                <a href="https://www.gongju.go.kr/tour/" target="_blank" rel="noopener noreferrer">문화관광<i className='xi-external-link'></i></a>
                <a href="https://www.gongju.go.kr/cyber/tour/" target="_blank" rel="noopener noreferrer">사이버투어<i className='xi-external-link'></i></a>
                <a href="https://www.gongju.go.kr/en/index.do" target="_blank" rel="noopener noreferrer">다국어<i className='xi-external-link'></i></a>
                <a href="https://www.gongju.go.kr/council/index.do" target="_blank" rel="noopener noreferrer">공주시의회<i className='xi-external-link'></i></a>
                <br />
                <a href="https://www.gongju.go.kr/health/index.do" target="_blank" rel="noopener noreferrer">부속기관템플릿(A타입)<i className='xi-external-link'></i></a>
                <a href="https://www.gongju.go.kr/welfare/index.do" target="_blank" rel="noopener noreferrer">부속기관템플릿(B타입)<i className='xi-external-link'></i></a>
                <a href="https://www.gongju.go.kr/sjnmuseum/index.do" target="_blank" rel="noopener noreferrer">부속기관템플릿(C타입)<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox imgbox2'>
                <div><img src="img/gongju_img01.jpg" /> <p>▲ 공주시청(대표)</p></div>
                <div><img src="img/gongju_img02.jpg" /> <p>▲ 문화관광</p></div>
              </div>
              

            </div>
          </div>
        </div>
      );
    case 'mokwon' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>목원대학교</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2020.05.26 ~ 2020.08.25</li>
                <li><strong>작업범위</strong>메인, 레이아웃, 스타일가이드, 프로그램페이지, 게시판</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>주요 역할 : UI/UX 개발 및 퍼블리싱</li>
                <li>사용 기술 : HTML &#47; CSS &#47; JavaScript(jQuery) &#47; AJAX &#47; SVN</li>
                <li>정보통신 접근성(WA) 인증 웹 접근성 마크 획득 (대표)</li>
                <li>검색엔진 최적화 작업</li>
                <li>전체 사이트 공통 레이아웃 &#47; 스타일가이드 작업</li>
                <li>개별메인, 학과&#47;부속기관&#47;대학원 메인 템플릿 UI개발 및 퍼블리싱 &#47; 인터렉션 작업</li>
                <li>프로그램, 게시판 페이지 UI개발 및 퍼블리싱</li>
                <li>크로스브라우징 및 반응형 작업</li>
                <li>클릭 시에 노출되는 콘텐츠의 html을 분리하고 Ajax를 이용해 데이터를 불러오는 형식으로 속도 개선</li>
                <li>사이트 오픈 후 두 달간 운영 및 유지보수 등 안정화 기간 후 유지보수팀으로 인계</li>
              </ul>
              <div className='site_btn'>
                <a href="https://www.mokwon.ac.kr/kr/" target="_blank" rel="noopener noreferrer">목원대학교(대표)<i className='xi-external-link'></i></a>
                <a href="https://enter.mokwon.ac.kr/enter/" target="_blank" rel="noopener noreferrer">목원대학교(입학)<i className='xi-external-link'></i></a>
                
                <br />
                <a href="https://www.mokwon.ac.kr/policelaw/" target="_blank" rel="noopener noreferrer">학과템플릿(A타입)<i className='xi-external-link'></i></a>
                <a href="https://www.mokwon.ac.kr/sw/" target="_blank" rel="noopener noreferrer">학과템플릿(B타입)<i className='xi-external-link'></i></a>
                <a href="https://www.mokwon.ac.kr/economic/" target="_blank" rel="noopener noreferrer">학과템플릿(C타입)<i className='xi-external-link'></i></a>
                <a href="https://www.mokwon.ac.kr/urban/" target="_blank" rel="noopener noreferrer">학과템플릿(D타입)<i className='xi-external-link'></i></a>
                <a href="https://www.mokwon.ac.kr/ceramic/" target="_blank" rel="noopener noreferrer">학과템플릿(E타입)<i className='xi-external-link'></i></a>
                <br />
                <a href="https://www.mokwon.ac.kr/vip/" target="_blank" rel="noopener noreferrer">부속기관템플릿(A타입)<i className='xi-external-link'></i></a>
                <a href="https://www.mokwon.ac.kr/dormitory/#skipnavi" target="_blank" rel="noopener noreferrer">부속기관템플릿(B타입)<i className='xi-external-link'></i></a>
                <a href="https://www.mokwon.ac.kr/fund/" target="_blank" rel="noopener noreferrer">부속기관템플릿(C타입)<i className='xi-external-link'></i></a>
                <br />
                <a href="https://www.mokwon.ac.kr/gs/" target="_blank" rel="noopener noreferrer">대학원템플릿<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox'>
                <div><img src="img/mokwon_img01.jpg" /></div>
              </div>
              

            </div>
          </div>
        </div>
      );
    case 'dgist' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>DGIST 인권센터 &amp; 산학협력단</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2020.08.03 ~ 2020.08.07 (인권센터)<br />2021.06.04 ~ 2021.06.11 (산학협력단)</li>
                <li><strong>작업범위</strong>메인</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>주요 역할 : UI/UX 개발 및 퍼블리싱</li>
                <li>사용 기술 : HTML &#47; CSS &#47; JavaScript(jQuery) &#47; SVN</li>
              </ul>
              <div className='site_btn'>
                <a href="https://www.dgist.ac.kr/humanrights/" target="_blank" rel="noopener noreferrer">인권센터<i className='xi-external-link'></i></a>
                <a href="https://ouic.dgist.ac.kr/ouic/" target="_blank" rel="noopener noreferrer">산학협력단<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox imgbox2'>
                <div><img src="img/dgist_img01.jpg" /> <p>▲ 인권센터</p></div>
                <div><img src="img/dgist_img02.jpg" /> <p>▲ 산학협력단</p></div>
              </div>
              

            </div>
          </div>
        </div>
      );
    case 'ky' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>건양대학교병원</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2021.08.09 ~ 2021.08.13</li>
                <li><strong>작업범위</strong>메인, 레이아웃</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>주요 역할 : UI/UX 개발 및 퍼블리싱</li>
                <li>사용 기술 : HTML &#47; CSS &#47; JavaScript(jQuery) &#47; SVN</li>
                <li>레이아웃&#47;메인 UI개발 및 퍼블리싱</li>
                <li>크로스브라우징 및 반응형 작업</li>
                <li>CSS Animation 인터렉션 작업</li>
                <li>현재 사이트가 리뉴얼중으로 메인&amp;레이아웃을 로컬소스로 옮겨놓았습니다</li>
                
              </ul>
              <div className='site_btn'>
                <a href="ky/main.html" target="_blank" rel="noopener noreferrer">사이트바로가기<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox'>
                <div><img src="img/ky_img01.jpg" /></div>
              </div>
              

            </div>
          </div>
        </div>
      );

    case 'nabe' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>제6회 청소년 나Be한마당</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2020.10.05 ~ 2020.10.31</li>
                <li><strong>작업범위</strong>메인, 레이아웃, 프로그램페이지, 게시판</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>주요 역할 : UI/UX 개발 및 퍼블리싱</li>
                <li>사용 기술 : HTML &#47; CSS &#47; JavaScript(jQuery) &#47; SVN</li>
                <li>레이아웃&#47;메인 UI개발 및 퍼블리싱</li>
                <li>프로그램, 게시판 페이지 UI개발 및 퍼블리싱</li>
                <li>크로스브라우징 및 반응형 작업</li>
                <li>SVG를 이용하여 메인구성 및 CSS Animation 과 Lottie를 활용한 인터렉션 작업</li>
                <li>현재 축제가 종료되어 메인&amp;레이아웃을 로컬소스로 옮겨놓았습니다</li>
                
              </ul>
              <div className='site_btn'>
                <a href="nanabe/main.html" target="_blank" rel="noopener noreferrer">사이트바로가기<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox'>
                <div><img src="img/nabe_img01.jpg" /></div>
              </div>
              

            </div>
          </div>
        </div>
      );

    case 'fair' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>제21회 국제인삼교역전</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2020.09.14 ~ 2020.09.21</li>
                <li><strong>작업범위</strong>메인, 레이아웃, 프로그램페이지, 게시판</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>주요 역할 : UI/UX 개발 및 퍼블리싱</li>
                <li>사용 기술 : HTML &#47; CSS &#47; JavaScript(jQuery) &#47; SVN</li>
                <li>레이아웃&#47;메인 UI개발 및 퍼블리싱</li>
                <li>프로그램, 게시판 페이지 UI개발 및 퍼블리싱</li>
                <li>크로스브라우징 및 반응형 작업</li>
                <li>메인 디자인과 어울리는 CSS Animation 인터렉션 작업</li>
                <li>현재 축제가 종료되어 메인&amp;레이아웃을 로컬소스로 옮겨놓았습니다</li>
                
              </ul>
              <div className='site_btn'>
                <a href="fair/main.html" target="_blank" rel="noopener noreferrer">사이트바로가기<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox'>
                <div><img src="img/fair_img01.jpg" /></div>
              </div>
              

            </div>
          </div>
        </div>
      );

    case 'kclub' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>경력개발 종합지원 플랫폼 K-클럽</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2020.11.01 ~ 2021.01.25</li>
                <li><strong>작업범위</strong>메인, 레이아웃, 프로그램페이지, 게시판</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>주요 역할 : UI/UX 개발 및 퍼블리싱</li>
                <li>사용 기술 : HTML &#47; CSS &#47; JavaScript(jQuery) &#47; SVN</li>
                <li>정보통신 접근성(WA) 인증 웹 접근성 마크 획득</li>
                <li>레이아웃&#47;메인 UI개발 및 퍼블리싱</li>
                <li>크로스브라우징 및 반응형 작업</li>
                <li>SVG를 이용하여 라인이 그려지는 효과 및 CSS Animation 인터렉션 작업</li>
                <li>현재 사이트가 리뉴얼되어 메인&amp;레이아웃을 로컬소스로 옮겨놓았습니다</li>
                
              </ul>
              <div className='site_btn'>
                <a href="kclub/main.html" target="_blank" rel="noopener noreferrer">사이트바로가기<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox'>
                <div><img src="img/kclub_img01.jpg" /></div>
              </div>
              

            </div>
          </div>
        </div>
      );

    case 'covid' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>코로나 국내 발생현황</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2022.01.11 ~ 2022.01.14</li>
                <li><strong>작업범위</strong>전체</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>사용 기술 : JSX &#47; CSS &#47; JavaScript &#47; React  &#47; SVN</li>
                <li>개인 사이드 프로젝트로 React 사용 경험 및 숙력도 향상을 위해 진행</li>
                <li>코로나 API를 활용한 국내 코로나 발생 현황 사이트</li>
                <li>Axios를 이용하여 코로나API 활용</li>
                <li>지역별 수치를 차트와 지도를 이용한 데이터 시각화</li>
              </ul>
              <div className='site_btn'>
                <a href="https://nananananara.github.io/covid19/" target="_blank" rel="noopener noreferrer">사이트바로가기<i className='xi-external-link'></i></a>
                <a href="https://github.com/nananananara/covid19" target="_blank" rel="noopener noreferrer">github<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox'>
                <div><img src="img/covid_img01.jpg" /></div>
              </div>
              

            </div>
          </div>
        </div>
      );

    case 'movie' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>THE Movies</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2022.02.13 ~ 2022.02.17</li>
                <li><strong>작업범위</strong>전체</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>사용 기술 : JSX &#47; SCSS &#47; JavaScript &#47; React  &#47; SVN</li>
                <li>개인 사이드 프로젝트로 React 사용 경험 및 숙력도 향상을 위해 진행</li>
                <li>API 활용한 인기,최신순 영화리스트와 상세정보 안내 사이트</li>
                <li>Axios를 이용하여 API 활용</li>
                <li>Route를 이용하여 메인페이지와 상세페이지 구분</li>
                <li>영화의 id값을 useParams을 이용해서 받아오고 상세페이지에 필요한 API 로드</li>

                
              </ul>
              <div className='site_btn'>
                <a href="https://nananananara.github.io/movie/" target="_blank" rel="noopener noreferrer">사이트바로가기<i className='xi-external-link'></i></a>
                <a href="https://github.com/nananananara/movie" target="_blank" rel="noopener noreferrer">github<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox imgbox2'>
                <div><img src="img/movie_img01.jpg" /> <p>▲ 메인 목록페이지</p></div>
                <div><img src="img/movie_img02.jpg" /> <p>▲ 상세페이지</p></div>
              </div>
              

            </div>
          </div>
        </div>
      );

    case 'youtube' :
      return (
        <div className="modal">
          <div className='modal_box'>
            <button className='modal_btn' onClick={()=>{props.setModal('false')}}>닫기</button>
            <div className='inner'>
              <div className='tit'>YouTube</div>
              <ul className='list'>
                <li><strong>작업기간</strong>2022.03.01 ~ 2022.03.04</li>
                <li><strong>작업범위</strong>전체</li>
                <li><strong>타입</strong>반응형웹</li>
              </ul>
              <ul className='list2'>
                <li>사용 기술 : JSX &#47; SCSS &#47; JavaScript &#47; React  &#47; SVN</li>
                <li>개인 사이드 프로젝트로 React 사용 경험 및 숙력도 향상을 위해 진행</li>
                <li>YouTube API를 활용</li>
                <li>인기동영상 목록, 상세정보 , 검색기능, 다크모드/라이트모드 구현</li>
                <li>Axios를 이용하여 API 활용</li>
                <li>Route를 이용하여 메인페이지와 상세페이지 구분</li>
              </ul>
              <div className='site_btn'>
                <a href="https://nananananara.github.io/youtube/" target="_blank" rel="noopener noreferrer">사이트바로가기<i className='xi-external-link'></i></a>
                <a href="https://github.com/nananananara/youtube" target="_blank" rel="noopener noreferrer">github<i className='xi-external-link'></i></a>
              </div>
              <div className='imgbox imgbox2'>
                <div><img src="img/youtube_img01.jpg" /></div>
                <div><img src="img/youtube_img02.jpg" /></div>
              </div>
              

            </div>
          </div>
        </div>
      );
  }
}

export default App;
