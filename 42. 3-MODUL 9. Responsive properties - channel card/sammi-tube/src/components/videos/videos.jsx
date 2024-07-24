import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "../";

const Videos = ({ videos }) => {
    // main {{videos}} componentdan chaqirildi
    // console.log(videos);//serverdan keletgan videolar kodni ildiziga qarab yahshilab qarab borish kerak
    return (
        <Stack
            width={"100%"}
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
        >
            {videos.map((item) => (
                <Box key={item.id.videoId}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard video={item} />}
                    {/* yani  mainda rapidapi serveridan get qilingan malumotlar videos o'zgaruvchida va bu videos componentiga props orqali jo'natilib map qilinib videocart componentga jo'natildi va channelIdham main jsxda rapidapidan get qilinsa bvideosni ichida bu yerga props orqali keladimi?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????  */}
                   
                </Box>
            ))}
        </Stack>
    );
};

export default Videos;
