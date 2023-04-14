import { View, Text, Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
export default function VideoCard({video}) {
  return (
    <View>
      <Image source={video.thumbnail} className="h-52 w-full"/>
      <View className="flex items-end mr-2 mb-5 -mt-6">
        <View className="bg-black rounded px-1"> 
            <Text className="text-white font-semibold text-xs">
                {video.duration}
            </Text>
        </View>
        
      </View>
      <View 
        className="flex-row justify-between items-center pb-5 space-x-3 mx-2">
            <Image source={video.avatar} className="h-9 w-9 rounded-full" />
            <View className="flex-1 space-y-1">
                <Text className="text-white font-semibold">
                    {video.title}
                </Text>
                <Text className="text-zinc-400 text-xs">
                    {video.channelTitle} • {video.viewCount} views • {video.publishedText}
                </Text>
            </View>
            <View className="self-start">
                <Icon.MoreVertical stroke="white" strokeWidth={2} height={15} />
            </View>
      </View>
    </View>
  )
}