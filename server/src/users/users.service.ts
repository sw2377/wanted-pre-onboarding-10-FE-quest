import { Injectable } from "@nestjs/common";
import { Item, User } from '../types/user'

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 0,
      username: "test",
      password: "qwer1234",
      userInfo: {
        name: "testAcoount",
        roles: ['user', 'admin']
      },
    },
  ];

  private Items: Item[] = [
    {
      id: 0,
      owner: {
        userId: 0
      },
      content: {
        title: 'blue straggler',
        body: 'https://en.wikipedia.org/wiki/Blue_straggler'
      }
    },
    {
      id: 1,
      owner: {
        userId: 0
      },
      content: {
        title: 'main sequence',
        body: 'https://en.wikipedia.org/wiki/Blue_straggler'
      }
    },
    {
      id: 2,
      owner: {
        userId: 0
      },
      content: {
        title: 'red dwarf',
        body: 'https://en.wikipedia.org/wiki/Red_dwarf'
      }
    },
    {
      id: 3,
      owner: {
        userId: 1
      },
      content: {
        title: 'white dwarf',
        body: 'https://en.wikipedia.org/wiki/White_dwarf'
      }
    },
    {
      id: 4,
      owner: {
        userId: 2
      },
      content: {
        title: 'red giant',
        body: 'https://en.wikipedia.org/wiki/Red_giant'
      }
    }
  ]

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async getAllItems(): Promise<Item[]> {
    return this.Items
  }

  async getUserItems(user: User): Promise<Item[]> {
    return this.Items.filter((item) => {
      return item.owner.userId === user.userId
    })
  }
}
