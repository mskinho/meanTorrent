(function (app) {
  'use strict';

  // Setting HTML5 Location Mode
  angular
    .module(app.applicationModuleName)
    .config(transConfig);

  // **************************************************
  // English Strings
  // --------------------------------------------------
  // Don`t change other code
  // **************************************************

  var string_en = {
    COMINGSOON: 'coming soon...',

    //client topbar menu
    MENU_CHAT: 'Chat',
    MENU_TORRENTS: 'Torrents',
    MENU_TORRENTS_ADMIN: 'Manage Torrents',
    MENU_USERS_ADMIN: 'Manage User',
    MENU_UPLOAD: 'Upload',
    MENU_FORUMS: 'Forums',
    MENU_RANKING: 'Ranking',
    MENU_RULES: 'Rules',
    MENU_VIP: 'VIP',
    MENU_ADMIN: 'Admin',

    //sub menu of torrents
    MENU_TORRENTS_SUB: {
      SUB_MOVIE: 'Movie',
      SUB_MTV: 'MTV',
      SUB_MUSIC: 'Music',
      SUB_OTHER: 'Other'
    },

    //client menu
    SIGNOUT: 'Signout',
    SIGNIN: 'Sign In',
    SIGNUP: 'Sign Up',
    EDIT_PROFILE: 'Edit Profile',
    EDIT_PROFILE_PIC: 'Edit Profile Picture',
    CHANGE_PASSWORD: 'Change Password',
    MANAGE_SOCIAL_ACCOUNTS: 'Manage Social Accounts',

    //Upload rules
    UPLOAD_RULES: 'Upload Rules:',
    UPLOAD_RULES_COUNT: '6',
    UPLOAD_RULES_CONTENT: [
      'The torrent file`s Tracker URL must be: <mark><strong>{{url}}</strong></mark>.',
      'The torrent file`s TMDB_ID must be TheMovieDB resources ID, <strong><a href="https://www.themoviedb.org/" target="_blank">you can find the ID from here</a></strong>.',
      'The resources detail info can be autoload, if it`s fine, then you can submit it.',
      'Select one or more tags that match the resources, which will play a significant role in your search results.',
      'After the submission of documents, may be approved by the management, the rules do not meet the seeds will be deleted directly.',
      'For additional assistance, please contact our administrator: <strong><a href="mailto:#">{{admin}}</a></strong>.'
    ],

    //HomeController & home views
    LOADING_TOP: 'Loading recommended info, please waiting...',
    TOP_MOVIE_INFO_ERROR: 'Get movie top info failed',

    //element title/alt
    TITLE_ALT: {
      SEEDS: 'Seeds users',
      LEECHERS: 'Leechers users',
      FINISHED: 'Finished users',
      IMDB_VOTES: 'IMDB Votes',
      MORE_TAGS: 'Show More Search Tags',
      RESET_TAGS: 'Reset All Search Tags',
      DOWNLOAD_TORRENT: 'Doanload the torrent'
    },

    //table fields
    TABLE_FIELDS: {
      //torrent
      INFO: 'Torrent info',
      SIZE: 'Size',
      SEEDS_LEECHERS_FINISHED: 'S/L/F',
      PUBLISHER: 'Publisher',
      LIFETIME: 'Life',
      VOTES: 'Votes',

      //peer
      USERNAME: 'DisplayName',
      UPLOADED: 'Uploaded/Speed',
      DOWNLOADED: 'Downloaded/Speed',
      RATIO: 'Ratio',
      FINISHED: 'Finished',
      STARTED: 'Started',
      ACTIVE: 'Active',
      CLIENT: 'Client',
      CONNECTABLE: 'Connectable',

      //ranking
      UPLOAD: 'Uploaded',
      DOWNLOAD: 'Downloaded',
      SEEDED: 'Seeded',
      LEECHED: 'Leeched',
      SCORE: 'Score',
      JOINED: 'Joined'
    },

    //page title
    PAGETITLE: {
      UPLOAD: 'Upload',
      MOVIE_LIST: 'Movie List',
      TORRENT_INFO: 'Torrent Info',
      RANKING: 'Ranking',
      RULES: 'Rules',
      VIP: 'Vip',
      FORUM: 'Forum'
    },

    //TorrentsController & views
    MOVIE_PAGE_INFO_ERROR: 'Get movie page info failed',
    MOVIE_PAGE_INFO_EMPTY: 'No movie founded, please change some new tags to research',
    TAGS_SEARCH: 'Tags Search',
    CA_KEYWORD: 'Keyword',
    PH_KEYWORD: 'Search keyword',
    CLEAR_ALL_CONDITION: 'Clear All Condition',
    MORE_TAGS: 'More Tags',
    CA_RESET: 'Reset',
    CA_DOWNLOAD: 'Download',
    TORRENT_DOWNLOAD_ERROR: 'Torrent file download failed',
    TORRENTS_DOWNLOAD_SUCCESSFULLY: 'Torrents file download successfully',

    //torrent info
    UNIT_MILLION: 'million',
    UNIT_MITUTE: 'min',
    TMDB_INFO_OK: 'Load TMDB movie info OK',
    TMDB_INFO_FAILED: 'Load TMDB movie info ERROR',
    TAB_VIDEO_INFO: 'Video Info',
    TAB_USER_SUBTITLE: 'Subtitle Info',
    TAB_USER_INFO: 'User Info',
    TAB_OTHER_TORRENTS: 'Other Torrents',
    TAB_MY_PANEL: 'My Pannel',
    TAB_ADMIN_PANEL: 'Admin Panel',

    TRANCKER_URL: 'Tracker Url',
    ATTRIBUTE_TAGS: 'Video Attribute (tags)',
    VIDEO_NFO: 'Video NFO',
    VIDEO_SIZE: 'Video Size',
    VIDEO_SALE_INFO: 'Video Sale Info',
    SALE_EXPIRES_TIME: 'expires',
    UPLOAD_SUBTITLE: 'Upload Subtitle file',
    SUBTITLE_LIST: 'Subtitle list',
    SUBTITLE_RULES: {
      0: 'If the torrent has no subtitle files, you have the following actions.',
      1: 'Please note the filename format, such as: <mark>Sing.2016.3D.HKG.BluRay.1080p.AVC.Atmos.TrueHD7.1-MTeam.chs&eng.srt</mark>'
    },
    MY_TORRENT_RULES: {
      0: 'This torrent file is uploaded by yourself, you have actions bellow.',
      1: 'For additional assistance, please contact our administrator: <strong><a href="mailto:#">{{admin}}</a></strong>'
    },
    ENTER_VIDEO_NFO: 'Please enter video NFO',
    TORRENT_SEED_USERS: 'Seed Users',
    TORRENT_LEECHER_USERS: 'Leecher Users',
    TORRENT_FINISHED_USERS: 'Finished Users',
    SUBTITLE_UPLOAD_FAILED: 'Failed to upload subtitle file',
    SUBTITLE_DELETE_ICON_TITLE: 'Delete this subtitle',
    SUBTITLE_CONFIRM_OK: 'Delete',
    SUBTITLE_CONFIRM_CANCEL: 'Cancel',
    SUBTITLE_CONFIRM_HEADER_TEXT: 'Delete Confirm',
    SUBTITLE_CONFIRM_BODY_TEXT: 'Are you sure want to delete this subtitle?',
    SUBTITLE_DOWNLOAD_SUCCESSFULLY: 'Subtitle file download successfully',
    SUBTITLE_DOWNLOAD_ERROR: 'Subtitle file download failed',
    SUBTITLE_DELETE_SUCCESSFULLY: 'Subtitle file delete successfully',
    SUBTITLE_DELETE_ERROR: 'Subtitle file delete failed',
    OTHER_TORRENT_LIST_TITLE: 'This resources has {{x}} other version torrent, you can view or download from here:',

    ADMIN_BASIC_COMMAND: 'Basic Command',
    ADMIN_BASIC_DELETE: 'Delete torrent',
    ADMIN_SALE_TYPE_SET: 'Sale Type Set',

    TORRENT_DELETE_CONFIRM_OK: 'Delete',
    TORRENT_DELETE_CONFIRM_CANCEL: 'Cancel',
    TORRENT_DELETE_CONFIRM_HEADER_TEXT: 'Delete Confirm',
    TORRENT_DELETE_CONFIRM_BODY_TEXT: 'Are you sure want to delete this torrent?',
    TORRENT_DELETE_SUCCESSFULLY: 'Torrent delete successfully',
    TORRENT_DELETE_ERROR: 'Torrent delete failed',
    TORRENT_SETSALETYPE_SUCCESSFULLY: 'Torrent sale type set successfully',
    TORRENT_SETSALETYPE_ERROR: 'Torrent sale type set failed',

    //page text
    PAGE_TEXT_FIRST: 'First',
    PAGE_TEXT_PREVIOUS: 'Previous',
    PAGE_TEXT_NEXT: 'Next',
    PAGE_TEXT_LAST: 'Last',

    //comment
    USER_COMMENT_LIST: 'User Comments List',
    POST_NEW_COMMENT: 'Post New Comment',
    EDIT_COMMENT: 'Edit Comment',
    REPLY_COMMENT: 'Reply Comment',
    SUBMIT_COMMENT: 'Submit Comment',
    SUBMIT_CANCEL: 'Cancel',
    MARKDOWN_LINK: 'Styling with Markdown is supported',
    COMMENT_REPLY_BUTTON: '@ & reply',
    COMMENT_REPLY_DELETE: 'Delete',
    COMMENT_REPLY_EDIT: 'Edit',
    COMMENT_EDITED_INFO: 'Edit at',
    COMMENT_CONFIRM_OK: 'Delete',
    COMMENT_CONFIRM_CANCEL: 'Cancel',
    COMMENT_CONFIRM_HEADER_TEXT: 'Delete Confirm',
    COMMENT_CONFIRM_BODY_TEXT: 'Are you sure want to delete this comment?',
    COMMENT_CONFIRM_BODY_TEXT_REPLY: 'Are you sure want to delete this comment reply?',
    COMMENT_EDIT_ICON_TITLE: 'Edit this reply',
    COMMENT_DELETE_ICON_TITLE: 'Delete this reply',

    //TorrentsUploadController & views
    TORRENTS_UPLOAD_SUCCESSFULLY: 'Successfully upload file',
    TORRENTS_UPLOAD_FAILED: 'Failed to upload file',
    TORRENTS_NO_FILE_SELECTED: 'No file selected',

    SELECT_TORRENT_FILE: 'Please select the torrent file',
    SELECT_FILE: 'Select file',
    DO_UPLOAD: 'Upload',
    ENTER_TMDB_ID: 'Please enter theMovieDB id 　<span style="font-size: 10pt;">[<a href="https://www.themoviedb.org/" target="_blank">find id on themofiedb.org</a>]</span>',
    LOAD_TMDB_INFO: 'Load info',
    TMDB_ID: 'TMDB ID',
    TMDB_ID_OK: 'TMDB ID is ok! Get info successfully',
    TMDB_ID_ERROR: 'TMDB ID is error! Get info failed',
    TMDB_ID_REQUIRED: 'Please enter TMDB ID',
    TMDB_MOVIE_INFO: 'The movie info from TMDB',
    TMDB_IS_LOADING: 'Loading the movie info, please wait...',
    SELECT_TAGS: 'Please select any tags for the resources',
    TORRENTS_SUBMIT_UPLOAD: 'Agree the rules and submit your resources',
    SUBMIT_BUTTON: 'OK, SUBMIT NOW',
    CANCEL_BUTTON: 'NO, CANCEL IT',
    AGREE_RULES: 'I agree and already read all the rules, <a href="#">read here</a>',
    DOWNLOAD_TORRENT: 'Download Torrent',

    //ranking view
    PAGE_HEADER_RANKING_UPLOAD: 'Uploaded Ranking',
    PAGE_HEADER_RANKING_DOWNLOAD: 'Downloaded Ranking',
    PAGE_HEADER_RANKING_RATIO: 'Ratio Ranking',
    PAGE_HEADER_RANKING_SCORE: 'Score Ranking',

    //admin views
    USERS_LIST: 'Users',
    USERS_UPDATE: 'Update',

    //user settings
    SETTINGS: 'Settings',
    BUTTON_SAVE_PROFILE: 'Save Profile',
    BUTTON_SELECT_PICTURE: 'Select Picture',
    BUTTON_USE_THIS_PICTURE: 'Use This Picture',
    BUTTON_CANCEL: 'Cancel',
    BUTTON_COMPLETE: 'Complete',
    BUTTON_SAVE_PASSWORD: 'Save Password',
    CAPTION_CURRENT_PASSWORD: 'Current Password',
    CAPTION_NEW_PASSWORD: 'New Password',
    CAPTION_VERIFY_PASSWORD: 'Verify Password',
    CAPTION_REQUIRED_CURRENT_PASSWORD: 'Your current password is required.',
    CAPTION_REQUIRED_NEW_PASSWORD: 'Enter a new password.',
    CAPTION_REQUIRED_VERIFY_PASSWORD: 'Verify your new password.',
    CAPTION_PASSWORD_NOT_MATCH: 'Passwords do not match.',

    //footer view
    MIT_PROTOCOL: 'The source of this project is protected by <a href="https://github.com/twbs/bootstrap/blob/master/LICENSE" target="_blank">MIT</a> open source protocol',
    GIT_REPO: 'Power by &copy;meanTottent，<a href="https://github.com/taobataoma/meanTorrent" target="_blank">view on GitHub</a>',

    ///////////////////////the movie db fields////////////////////////////////
    TMDB_FIELDS: {
      ID: 'id',
      IMDB_ID: 'imdb_id',
      IMDB_LINK: 'IMDB Link',
      TMDB_LINK: 'TMDB Link',
      HOMEPAGE: 'homepage',
      ADULT: 'adult',
      BUDGET: 'budget',
      REVENUE: 'revenue',
      ORIGINAL_LANGUAGE: 'original_language',
      ORIGINAL_TITLE: 'original_title',
      TITLE: 'title',
      BELONGS_TO_COLLECTION: 'belongs_to_collection',
      GENRES: 'genres',
      OVERVIEW: 'overview',
      POPULARITY: 'popularity',
      PRODUCTION_COMPANIES: 'production_companies',
      PRODUCTION_COUNTRIES: 'production_countries',
      RELEASE_DATE: 'release_date',
      RUNTIME: 'runtime',
      SPOKEN_LANGUAGES: 'spoken_languages',
      STATUS: 'status',
      TAGLINE: 'tagline',
      VIDEO: 'video',
      VOTE_AVERAGE: 'vote_average',
      VOTE_COUNT: 'vote_count',
      VOTE_UNIT: 'users',
      BACKDROP_PATH: 'backdrop_path',
      POSTER_PATH: 'poster_path',
      CAST: 'cast:',
      DIRECTOR: 'Director'
    },

    /////////////////////////resources tag fields///////////////////////////////////
    RESOURCESTAGS: {
      TYPE: {
        SELF: 'Type',
        BLU_RAY: 'BLU_RAY',
        REMUX: 'REMUX',
        ENCODE: 'ENCODE'
      },

      RESOLUTION: {
        SELF: 'Resolution',
        S4K: '4K',
        S1080P: '1080P',
        S720P: '720P'
      },

      VIDEO: {
        SELF: 'Video Codec',
        AVC: 'AVC',
        X265: 'X265',
        X264: 'X264'
      },

      AUDIO: {
        SELF: 'Audio Codec',
        AAC: 'AAC',
        DTS: 'DTS',
        DTS_HD: 'DTS HD',
        ATMOS_TRUEHD: 'Atmos TrueHD'
      },

      THREED: {
        SELF: '2D/3D',
        T2D: '2D',
        T3D: '3D',
        T2D_3D: '2D-3D'
      },

      RANKING: {
        SELF: 'Ranking',
        IMDB_TOP100: 'IMDB TOP100',
        IMDB_TOP250: 'IMDB TOP250',
        DOUBAN_TOP100: 'Douban TOP100',
        DOUBAN_TOP250: 'Douban TOP250'
      },

      REGION: {
        SELF: 'Region',
        CHINA: 'China',
        JAPAN: 'Japan',
        KOREA: 'Korea',
        INDIA: 'India',
        ARAB: 'Arab'
      },

      MODIFY: {
        SELF: 'Modify',
        DIY: 'DIY',
        GUOPEI: 'Mandarin',
        ZHONGZI: 'Chinese Subtitle'
      }
    }
  };

  // **************************************************
  // English Strings end
  // **************************************************

  // config $translateProvider
  transConfig.$inject = ['$translateProvider'];
  function transConfig($translateProvider) {
    $translateProvider.translations('en', string_en);
  }

}(ApplicationConfiguration));
