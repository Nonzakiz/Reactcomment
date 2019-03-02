import React from 'react';
import Segment from 'components/Segment';
import ViewFlex from 'components/ViewFlex';
import ProfileImage from 'components/ProfileImage';
import './styles.scss';
import CapsuleButton from '../CapsuleButton';
import {Icon} from 'antd'
const postOptions = [{
  icon: <Icon type="user" />,
  label:'first user'
},{
  icon: <Icon type="plus" />,
  label:'first plus'
},{
  icon: <Icon type="minus" />,
  label:'first minus'
}];
function renderPostOption(options){
  return options.map((option)=>(
    <ViewFlex>
      <CapsuleButton {...option} />
    </ViewFlex>
  ));
}


function PostSection() {
  return (
    <Segment title="โพสต์" >
      <ViewFlex column>
        <ViewFlex className="postSection">
          <ProfileImage size="x3" />
        </ViewFlex>
        <ViewFlex fluid>
          <textarea className="postInputArea" placeholder="คุณกำลังคิดอะไรอยู่ ?" />
        </ViewFlex>
        {renderPostOption(postOptions)}
      </ViewFlex>
    </Segment>
  )
}

export default PostSection;