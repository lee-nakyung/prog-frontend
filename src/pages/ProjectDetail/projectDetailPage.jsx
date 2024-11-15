import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DetailHeader from "../../components/ProjectDetail/detailHeader";
import Header from '../../components/Header/Header';
import PreviewBox from '../../components/ProjectDetail/previewBox';
import MainBox from '../../components/ProjectDetail/mainBox';
import CommunityBox from '../../components/ProjectDetail/communityBox';

const Container = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
`;

function ProjectDetail() {
    const { project_id } = useParams(); // URL에서 project_id를 가져옵니다.

    return (
        <Container>
            <Header />
            <DetailHeader />
            <PreviewBox project_id={project_id} /> 
            <MainBox project_id={project_id} />
            <CommunityBox project_id={project_id} />
        </Container>
    );
}

export default ProjectDetail;
