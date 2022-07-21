import styled from "styled-components";
import { RiArticleLine } from 'react-icons/ri'
import { AiFillPicture } from 'react-icons/ai'
import { MdOutlineVideoLibrary } from 'react-icons/md'
import { MdEventAvailable } from 'react-icons/md'
import { AiOutlineEllipsis } from 'react-icons/ai'
import PostModal from './PostModal'
import { useEffect, useState } from "react";
import { connect } from "react-redux/es/exports";
import { getArticlesAPI } from "../action";
const Main = (props) => {
  const [showModal, setShowModal] = useState("close");

  useEffect(() => {
    props.getArticles();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }

  }
  return (
    <>
      {
        props.article.length === 0 ? (
          <p>There are no articles</p>
        ) : (
          <Container>
            <ShareBox>
              <div>
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <button onClick={handleClick} disabled={props.loading ? true : false}>Start a post</button>
              </div>
              <div>
                <button>
                  <AiFillPicture className="photo-icon" />
                  <span>Photo</span>
                </button>
                <button>
                  <MdOutlineVideoLibrary className="video-icon" />
                  <span>Video</span>
                </button>
                <button>
                  <MdEventAvailable className="event-icon" />
                  <span>Event</span>
                </button>
                <button>
                  <RiArticleLine className="article-icon" />
                  <span>Write artile</span>
                </button>
              </div>
            </ShareBox>
            <Content>
              {
                props.loading && (<img src="/images/spin-loading.svg" />)
              }

              <Article>
                <SharedActor>
                  <a>
                    <img src="/images/user.svg" alt="" />
                    <div>
                      <span>Title</span>
                      <span>Info</span>
                      <span>Date</span>
                    </div>
                  </a>
                  <button>
                    <AiOutlineEllipsis className="ellip-icon" />
                  </button>
                </SharedActor>
                <Description>Description</Description>
                <SharedImg>
                  <a>
                    <img src="/images/shared-images.jpg" alt="" />
                  </a>
                </SharedImg>
                <SocialCounts>
                  <li>
                    <button>
                      <i class="fa-solid fa-thumbs-up"></i>
                      <i class="fa-solid fa-hands-clapping"></i>
                      <span>67</span>
                    </button>
                  </li>
                  <li>
                    <a>2 comments</a>
                  </li>
                </SocialCounts>
                <SocialActions>
                  <button>
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>Like</span>
                  </button>
                  <button>
                    <i class="fa-solid fa-comment-dots"></i>
                    <span>
                      Comments
                    </span>
                  </button>
                  <button>
                    <i class="fa-solid fa-share"></i>
                    <span>
                      Share
                    </span>
                  </button>
                  <button>
                    <i class="fa-solid fa-paper-plane"></i>
                    <span>
                      Send
                    </span>
                  </button>
                </SocialActions>
              </Article>
            </Content>
            <PostModal showModal={showModal} handleClick={handleClick} />
          </Container>
        )}
    </>
  );
};

const Container = styled.div`
  grid-area: main;
  & .photo-icon{
    color: rgb(52, 135, 206);
    font-size: 22px;
    margin: 0 4px 0 -2px;
  }
  & .video-icon{
    color: rgb(58, 178, 121);
    font-size: 22px;
    margin: 0 4px 0 -2px;
  }
  & .event-icon{
    color: rgb(255, 129, 107);
    font-size: 22px;
    margin: 0 4px 0 -2px;
  }
  & .article-icon{
    color: rgb(255, 169, 107);
    font-size: 22px;
    margin: 0 4px 0 -2px;
  }
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position:relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div{
    button{
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items:center;
      font-weight: 600;
    }
    &:first-child{
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img{
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button{
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0,0.15);
        border-radius: 35px;
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2){
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button{
        span{
          color: #70b5f9;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a{
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img{
      width: 48px;
      height: 48px;
    }
    &> div{
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span{
        text-align: left;
        &:first-child{
          font-size: 14px;
          font-weight: 700;
          color: rgba(0,0,0,1);
        }
        &:nth-child(n + 1){
          font-size: 12px;
          color: rgba(0,0,0,0.6);
        }
      }
    }
  }
  button{
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    & .ellip-icon{
      font-size: 22px;
    }
  }
`;

const Description = styled.div`
padding: 0 16px;
overflow: hidden;
color: rgba(0,0,0,0.9);
font-size: 14px;
text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #9fafb9;
  img{
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li{
    margin-right: 5px;
    font-size: 12px;
    button{
      display: flex;
      & i:first-child{
        color: green;
        margin-right: 4px;
      }
      & i:nth-child(2){
        color: blue;
        margin-right: 4px;
      }
    }
  }
`;

const SocialActions = styled.div`
  align-items:center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button{
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    @media screen and (min-width: 768px){
      span{
        margin-left: 8px;
      }
    }
  }
`;

const Content = styled.div`
text-align: center;
& > img{
  width: 30px;
}
`;

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main); 